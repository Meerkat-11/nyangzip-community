import { AppShell } from '@/components/app-shell';
import { samplePosts } from '@/lib/data';

export default function PostDetailPage() {
  const post = samplePosts[0];

  return (
    <AppShell>
      <article className="max-w-3xl rounded-2xl border border-line bg-white p-5 shadow-card">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={post.author.avatar} alt={post.author.name} className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="font-bold text-ink">{post.author.name}</p>
              <p className="text-xs text-slate-500">{post.createdAt} · {post.category}</p>
            </div>
          </div>
          <div className="flex gap-2 text-sm text-slate-600">
            <button className="rounded-full border border-line px-3 py-1.5">수정</button>
            <button className="rounded-full border border-line px-3 py-1.5">삭제</button>
          </div>
        </div>

        <h1 className="mt-6 text-3xl font-bold text-ink">{post.title}</h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-blush-100 px-2.5 py-1 text-xs font-medium text-blush-700">{tag}</span>
          ))}
        </div>

        {post.image && (
          <img src={post.image} alt={post.title} className="mt-6 h-[420px] w-full rounded-2xl object-cover" />
        )}

        <p className="mt-6 whitespace-pre-line text-base leading-8 text-slate-700">{post.content}</p>

        <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
          <span>❤ {post.likes}</span>
          <span>💬 {post.comments}</span>
          <span>🔖 {post.saves}</span>
        </div>

        <div className="mt-8 border-t border-line pt-6">
          <h2 className="text-lg font-bold text-ink">댓글 34</h2>
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-xl border border-line bg-soft p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-ink">냥이친구{n}</p>
                  <span className="text-xs text-slate-500">5분 전</span>
                </div>
                <p className="mt-2 text-sm text-slate-700">너무 귀엽네요! 저희 집 고양이도 이런 표정을 짓습니다.</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </AppShell>
  );
}
