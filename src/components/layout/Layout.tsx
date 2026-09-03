import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { FloatingCallButton } from '@/components/ui/FloatingCallButton';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { LanguageProvider } from '@/components/ui/LanguageSwitcher';

export default function Layout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <FloatingCallButton />
      </div>
    </LanguageProvider>
  );
}