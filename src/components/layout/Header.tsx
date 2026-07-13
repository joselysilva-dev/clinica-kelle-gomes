export function Header({ title }: { title: string }) {
  return (
    <header style={{ marginBottom: '1.5rem' }}>
      <h1>{title}</h1>
    </header>
  );
}
