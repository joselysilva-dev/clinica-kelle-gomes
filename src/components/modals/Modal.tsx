export function Modal({ open, title, children }: { open: boolean; title: string; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={title} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.45)', display: 'grid', placeItems: 'center', zIndex: 80 }}>
      <div style={{ background: 'var(--color-surface)', padding: '1rem', borderRadius: 12, width: 'min(560px, 92%)' }}>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}
