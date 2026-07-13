import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { sendContact } from '@/services/public';

const schema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  mensagem: z.string().min(10)
});

type ContactValues = z.infer<typeof schema>;

export function ContactForm() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (values: ContactValues) => {
    await sendContact({ name: values.nome, email: values.email, message: values.mensagem });
    setSuccessMessage('Mensagem enviada com sucesso. Retornaremos em breve.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid" aria-label="Formulario de contato">
      <label>
        Nome
        <Input {...register('nome')} />
        {errors.nome ? <small>{errors.nome.message}</small> : null}
      </label>
      <label>
        Email
        <Input type="email" {...register('email')} />
        {errors.email ? <small>{errors.email.message}</small> : null}
      </label>
      <label>
        Mensagem
        <Textarea {...register('mensagem')} />
        {errors.mensagem ? <small>{errors.mensagem.message}</small> : null}
      </label>
      {successMessage ? <p role="status" style={{ color: 'var(--color-success)' }}>{successMessage}</p> : null}
      <Button type="submit">Enviar</Button>
    </form>
  );
}
