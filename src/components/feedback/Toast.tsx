export function Toast({ message }: { message: string }) {
  return (
    <div role="status" style={{ position: 'fixed', top: 16, right: 16, background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '.75rem 1rem', borderRadius: 10, boxShadow: 'var(--shadow-sm)' }}>
      {message}
    </div>
  );
}
