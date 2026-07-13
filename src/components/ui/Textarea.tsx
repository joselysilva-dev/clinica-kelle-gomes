import { TextareaHTMLAttributes } from 'react';

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      style={{
        width: '100%',
        minHeight: 120,
        borderRadius: 10,
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        padding: '0.6rem 0.8rem'
      }}
    />
  );
}
