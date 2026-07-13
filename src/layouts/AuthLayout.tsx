import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <main className="container" style={{ display: 'grid', placeItems: 'center', padding: '5rem 0' }}>
      <Outlet />
    </main>
  );
}
