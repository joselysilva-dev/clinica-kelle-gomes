import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { AdminLayout } from '@/layouts/AdminLayout';
import { AuthLayout } from '@/layouts/AuthLayout';
import { PrivateRoute } from './PrivateRoute';
import { Loader } from '@/components/layout/Loader';

const Home = lazy(() => import('@/pages/Home'));
const Sobre = lazy(() => import('@/pages/Sobre'));
const Procedimentos = lazy(() => import('@/pages/Procedimentos'));
const ProcedimentoDetalhe = lazy(() => import('@/pages/ProcedimentoDetalhe'));
const Galeria = lazy(() => import('@/pages/Galeria'));
const AntesDepois = lazy(() => import('@/pages/AntesDepois'));
const Depoimentos = lazy(() => import('@/pages/Depoimentos'));
const Equipe = lazy(() => import('@/pages/Equipe'));
const Blog = lazy(() => import('@/pages/Blog'));
const Artigo = lazy(() => import('@/pages/Artigo'));
const Contato = lazy(() => import('@/pages/Contato'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Politica = lazy(() => import('@/pages/Politica'));
const Termos = lazy(() => import('@/pages/Termos'));
const Login = lazy(() => import('@/pages/Login'));
const Admin = lazy(() => import('@/pages/Admin'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const UsersAdmin = lazy(() => import('@/pages/Admin/Usuarios'));
const CategoriesAdmin = lazy(() => import('@/pages/Admin/Categorias'));
const ProceduresAdmin = lazy(() => import('@/pages/Admin/Procedimentos'));
const AgendaAdmin = lazy(() => import('@/pages/Admin/Agenda'));
const GalleryAdmin = lazy(() => import('@/pages/Admin/Galeria'));
const TestimonialsAdmin = lazy(() => import('@/pages/Admin/Depoimentos'));
const BlogAdmin = lazy(() => import('@/pages/Admin/Blog'));
const MessagesAdmin = lazy(() => import('@/pages/Admin/Mensagens'));
const SettingsAdmin = lazy(() => import('@/pages/Admin/Configuracoes'));
const UploadsAdmin = lazy(() => import('@/pages/Admin/Uploads'));
const PatientsAdmin = lazy(() => import('@/pages/Admin/Pacientes'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const withSuspense = (element: React.ReactNode) => <Suspense fallback={<Loader />}>{element}</Suspense>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: withSuspense(<Home />) },
      { path: 'sobre', element: withSuspense(<Sobre />) },
      { path: 'procedimentos', element: withSuspense(<Procedimentos />) },
      { path: 'procedimentos/:slug', element: withSuspense(<ProcedimentoDetalhe />) },
      { path: 'galeria', element: withSuspense(<Galeria />) },
      { path: 'antes-depois', element: withSuspense(<AntesDepois />) },
      { path: 'depoimentos', element: withSuspense(<Depoimentos />) },
      { path: 'equipe', element: withSuspense(<Equipe />) },
      { path: 'blog', element: withSuspense(<Blog />) },
      { path: 'blog/:slug', element: withSuspense(<Artigo />) },
      { path: 'contato', element: withSuspense(<Contato />) },
      { path: 'faq', element: withSuspense(<FAQ />) },
      { path: 'politica-de-privacidade', element: withSuspense(<Politica />) },
      { path: 'termos', element: withSuspense(<Termos />) }
    ]
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [{ index: true, element: withSuspense(<Login />) }]
  },
  {
    path: '/admin',
    element: <PrivateRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: withSuspense(<Admin />) },
          { path: 'dashboard', element: withSuspense(<Dashboard />) }
          ,{ path: 'usuarios', element: withSuspense(<UsersAdmin />) }
          ,{ path: 'categorias', element: withSuspense(<CategoriesAdmin />) }
          ,{ path: 'procedimentos', element: withSuspense(<ProceduresAdmin />) }
          ,{ path: 'agenda', element: withSuspense(<AgendaAdmin />) }
          ,{ path: 'galeria', element: withSuspense(<GalleryAdmin />) }
          ,{ path: 'depoimentos', element: withSuspense(<TestimonialsAdmin />) }
          ,{ path: 'blog', element: withSuspense(<BlogAdmin />) }
          ,{ path: 'mensagens', element: withSuspense(<MessagesAdmin />) }
          ,{ path: 'configuracoes', element: withSuspense(<SettingsAdmin />) }
          ,{ path: 'uploads', element: withSuspense(<UploadsAdmin />) }
          ,{ path: 'pacientes', element: withSuspense(<PatientsAdmin />) }
        ]
      }
    ]
  },
  { path: '*', element: withSuspense(<NotFound />) }
]);
