import { Sidebar } from '@/components/sidebar';
import { MobileNav } from '@/components/mobile-nav';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8f5f4] text-ink">
      <div className="mx-auto flex max-w-[1440px]">
        <Sidebar />
        <main className="flex-1 px-4 pb-24 pt-6 md:px-6 lg:pb-10">
          <div className="mx-auto max-w-5xl">{children}</div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
