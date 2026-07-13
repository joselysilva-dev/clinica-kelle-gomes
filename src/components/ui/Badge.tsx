export function Badge({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        borderRadius: 999,
        background: 'var(--color-surface-2)',
        color: 'var(--color-primary-strong)',
        padding: '0.2rem 0.6rem',
        fontSize: 12,
        fontWeight: 700
      }}
    >
      {label}
    </span>
  );
}
