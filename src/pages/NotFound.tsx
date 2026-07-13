import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1>404</h1>
      <p>Pagina nao encontrada.</p>
      <Link to="/">Voltar para home</Link>
    </div>
  );
}
