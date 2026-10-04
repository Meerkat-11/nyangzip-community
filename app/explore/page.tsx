import { AppShell } from '@/components/app-shell';
import { categories, samplePosts } from '@/lib/data';

export default function ExplorePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <section className="rounded-2xl border border-line bg-white p-5 shadow-card">
          <h1 className="text-2xl font-bold text-ink">탐색</h1>
          <p className="mt-1 text-sm text-slate-600">인기 카테고리와 추천 게시글을 한눈에 확인해보세요.</p>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <a key={category.id} href={`/community/${category.slug}`} className="rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div className="text-3xl">{category.emoji}</div>
                <span className="rounded-full bg-blush-100 px-2 py-1 text-xs font-medium text-blush-700">추천</span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-ink">{category.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{category.description}</p>
            </a>
          ))}
        </div>

        <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
          <h2 className="text-xl font-bold text-ink">추천 게시글</h2>
          <div className="mt-4 space-y-4">
            {samplePosts.slice(0, 3).map((post) => (
              <div key={post.id} className="rounded-xl border border-line bg-soft p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-bold text-ink">{post.author.name}</p>
                    <p className="text-xs text-slate-500">{post.createdAt}</p>
                  </div>
                  <span className="text-xs rounded-full bg-white px-2 py-1 text-slate-700 border border-line">{post.category}</span>
                </div>
                <h3 className="mt-3 font-semibold text-ink">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{post.content.slice(0, 120)}...</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
