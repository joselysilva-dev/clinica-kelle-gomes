import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline';
};

export function Button({ className, variant = 'primary', ...props }: Props) {
  return (
    <button
      className={clsx('btn', className)}
      data-variant={variant}
      {...props}
      style={{
        borderRadius: '999px',
        padding: '0.75rem 1.25rem',
        border: variant === 'outline' ? '1px solid var(--color-primary)' : '1px solid transparent',
        background: variant === 'outline' ? 'transparent' : 'var(--color-primary)',
        color: variant === 'outline' ? 'var(--color-primary)' : '#fff',
        cursor: 'pointer'
      }}
    />
  );
}
