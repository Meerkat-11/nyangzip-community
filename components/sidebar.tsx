import Link from 'next/link';
import { Bell, Compass, Home, PlusCircle, Settings, User, ShieldCheck } from 'lucide-react';
import { categories } from '@/lib/data';

export function Sidebar() {
  const nav = [
    { href: '/', label: '홈', icon: Home },
    { href: '/explore', label: '탐색', icon: Compass },
    { href: '/create', label: '글쓰기', icon: PlusCircle },
    { href: '/notifications', label: '알림', icon: Bell },
    { href: '/profile/catsea', label: '프로필', icon: User }
  ];

  return (
    <aside className="hidden h-screen w-[260px] shrink-0 border-r border-line bg-white p-5 lg:block">
      <div className="mb-8">
        <Link href="/" className="text-2xl font-bold text-ink">🐱 냥집사 모임</Link>
      </div>

      <nav className="space-y-2">
        {nav.map(({ href, label, icon: Icon }) => (
          <Link key={label} href={href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-slate-700 transition hover:bg-soft hover:text-blush-700">
            <Icon size={18} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-8 rounded-2xl border border-line bg-soft p-4">
        <p className="text-sm font-bold text-ink">카테고리</p>
        <div className="mt-3 space-y-2">
          {categories.slice(0, 5).map((category) => (
            <Link key={category.id} href={`/community/${category.slug}`} className="flex items-center justify-between text-sm text-slate-700 hover:text-blush-700">
              <span>{category.emoji} {category.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-line bg-soft p-4">
        <Link href="/admin" className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-blush-700">
          <ShieldCheck size={16} />
          관리자
        </Link>
        <Link href="/settings" className="mt-3 flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-blush-700">
          <Settings size={16} />
          설정
        </Link>
      </div>
    </aside>
  );
}
