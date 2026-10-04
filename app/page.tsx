import { AppShell } from '@/components/app-shell';
import { PostCard } from '@/components/post-card';
import { categories, samplePosts } from '@/lib/data';

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <section className="rounded-2xl border border-line bg-white p-5 shadow-card">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-blush-700">🐾 오늘의 냥집사 피드</p>
              <h1 className="mt-1 text-2xl font-bold text-ink">우리의 고양이 이야기</h1>
            </div>
            <a href="/create" className="rounded-full bg-blush-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blush-600">
              + 새 게시글
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.slice(0, 6).map((category) => (
              <a
                key={category.id}
                href={`/community/${category.slug}`}
                className="rounded-full border border-line bg-soft px-3 py-1.5 text-sm text-slate-700 transition hover:border-blush-200 hover:text-blush-700"
              >
                {category.emoji} {category.title}
              </a>
            ))}
          </div>
        </section>

        <div className="space-y-5">
          {samplePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
