import { InputHTMLAttributes } from 'react';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        width: '100%',
        minHeight: 44,
        borderRadius: 10,
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        padding: '0.6rem 0.8rem'
      }}
    />
  );
}
