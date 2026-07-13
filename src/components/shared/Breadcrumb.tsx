import { Link } from 'react-router-dom';

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="container" style={{ paddingTop: '1rem' }}>
      <Link to="/">Home</Link> / <span>{current}</span>
    </nav>
  );
}
