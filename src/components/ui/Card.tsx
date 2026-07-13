export function Card({ children }: { children: React.ReactNode }) {
  return (
    <article
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 14,
        padding: '1rem',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      {children}
    </article>
  );
}
