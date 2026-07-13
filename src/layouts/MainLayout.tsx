import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { ProgressBar } from '@/components/layout/ProgressBar';

export function MainLayout() {
  return (
    <>
      <ProgressBar />
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
