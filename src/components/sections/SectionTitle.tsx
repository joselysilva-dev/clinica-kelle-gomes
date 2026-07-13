export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header style={{ marginBottom: '1rem' }}>
      {subtitle ? <p style={{ color: 'var(--color-primary)' }}>{subtitle}</p> : null}
      <h2 style={{ margin: 0 }}>{title}</h2>
    </header>
  );
}
