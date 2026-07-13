import { NavLink } from 'react-router-dom';

const adminLinks = [
  ['dashboard', '/admin/dashboard'],
  ['usuarios', '/admin/usuarios'],
  ['pacientes', '/admin/pacientes'],
  ['procedimentos', '/admin/procedimentos'],
  ['categorias', '/admin/categorias'],
  ['agenda', '/admin/agenda'],
  ['galeria', '/admin/galeria'],
  ['depoimentos', '/admin/depoimentos'],
  ['blog', '/admin/blog'],
  ['mensagens', '/admin/mensagens'],
  ['configuracoes', '/admin/configuracoes'],
  ['uploads', '/admin/uploads']
] as const;

export function Sidebar() {
  return (
    <aside aria-label="Menu administrativo" style={{ minWidth: 240 }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '.5rem' }}>
        {adminLinks.map(([label, to]) => (
          <li key={to}>
            <NavLink to={to}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
