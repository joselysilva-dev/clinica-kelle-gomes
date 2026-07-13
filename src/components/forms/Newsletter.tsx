import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { subscribeNewsletter } from '@/services/public';

const schema = z.object({ email: z.string().email() });

type Values = z.infer<typeof schema>;

export function Newsletter() {
	const [successMessage, setSuccessMessage] = useState<string | null>(null);
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema) });

	return (
		<form
			className="container"
			onSubmit={handleSubmit(async (values) => {
				await subscribeNewsletter(values);
				setSuccessMessage('Inscrição concluída com sucesso.');
			})}
			style={{ display: 'grid', gap: '.75rem' }}
		>
			<h2>Newsletter</h2>
			<label>
				E-mail
				<Input type="email" {...register('email')} />
				{errors.email ? <small>{errors.email.message}</small> : null}
			</label>
			{successMessage ? <p role="status" style={{ color: 'var(--color-success)' }}>{successMessage}</p> : null}
			<Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Inscrever-se'}</Button>
		</form>
	);
}
