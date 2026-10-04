import { AppShell } from '@/components/app-shell';
import { categories } from '@/lib/data';

export default function CommunityPage({ params }: { params: { category: string } }) {
  const category = categories.find((item) => item.slug === params.category) ?? categories[0];

  return (
    <AppShell>
      <div className="space-y-6">
        <section className="rounded-2xl border border-line bg-white p-5 shadow-card">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{category.emoji}</span>
            <div>
              <p className="text-sm text-blush-700">커뮤니티</p>
              <h1 className="text-2xl font-bold text-ink">{category.title}</h1>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-600">{category.description}</p>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <article key={item} className="rounded-2xl border border-line bg-white p-4 shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=200&q=80" alt="profile" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-ink">집사{item}</p>
                    <p className="text-xs text-slate-500">2시간 전</p>
                  </div>
                </div>
                <span className="rounded-full bg-blush-100 px-2 py-1 text-xs font-medium text-blush-700">{category.title}</span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-ink">우리집 고양이의 오늘의 귀여움 #{item}</h2>
              <p className="mt-2 text-sm text-slate-700">점점 더 잘 자는 모습을 보고 있으면 집사가 너무 행복합니다. 오늘도 고양이 덕분에 하루가 밝아졌어요.</p>
            </article>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
