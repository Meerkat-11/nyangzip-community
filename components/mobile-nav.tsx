import Link from 'next/link';
import { Bell, Compass, Home, PlusCircle, User } from 'lucide-react';

export function MobileNav() {
  const items = [
    { href: '/', label: '홈', icon: Home },
    { href: '/explore', label: '탐색', icon: Compass },
    { href: '/create', label: '글쓰기', icon: PlusCircle },
    { href: '/notifications', label: '알림', icon: Bell },
    { href: '/profile/catsea', label: '프로필', icon: User }
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-white/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-5 gap-1 px-2 py-2">
        {items.map(({ href, label, icon: Icon }) => (
          <Link key={label} href={href} className="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-[11px] font-medium text-slate-600 transition hover:bg-soft hover:text-blush-700">
            <Icon size={18} />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
