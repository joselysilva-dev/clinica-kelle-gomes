import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/hooks/useAuth';

const schema = z.object({ email: z.string().email(), password: z.string().min(6) });
type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema) });

  return (
    <section style={{ width: 'min(440px, 100%)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 20, padding: '2rem', boxShadow: 'var(--shadow-md)' }}>
      <form
        onSubmit={handleSubmit(async (values) => {
          try {
            setErrorMessage(null);
            await login(values.email, values.password);
            navigate('/admin/dashboard');
          } catch {
            setErrorMessage('Nao foi possivel entrar. Verifique suas credenciais.');
          }
        })}
        style={{ display: 'grid', gap: '.9rem' }}
      >
        <h1>Login administrativo</h1>
        <p>Acesse o painel da Clinica Kelle Gomes com sua conta autorizada.</p>
        <label>Email<Input type='email' autoComplete='email' {...register('email')} /></label>
        <label>Senha<Input type='password' autoComplete='current-password' {...register('password')} /></label>
        {errorMessage ? <p role='alert' style={{ color: 'var(--color-danger)' }}>{errorMessage}</p> : null}
        <Button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Entrando...' : 'Entrar'}</Button>
      </form>
    </section>
  );
}
