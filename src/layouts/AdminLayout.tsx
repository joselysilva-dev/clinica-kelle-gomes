import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';

export function AdminLayout() {
  return (
    <div className="container" style={{ display: 'flex', gap: '2rem', padding: '2rem 0' }}>
      <Sidebar />
      <section style={{ flex: 1 }}>
        <Header title="Painel Administrativo" />
        <Outlet />
      </section>
    </div>
  );
}
