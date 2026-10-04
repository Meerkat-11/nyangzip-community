import { categories } from '@/lib/data';

export function PostCard({ post }: { post: any }) {
  const { author, category, title, content, tags, likes, comments, saves, image } = post;

  return (
    <article className="rounded-2xl border border-line bg-white p-4 shadow-card">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={author.avatar} alt={author.name} className="h-11 w-11 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-ink">{author.name}</p>
            <p className="text-xs text-slate-500">{author.username} · {post.createdAt}</p>
          </div>
        </div>
        <span className="rounded-full bg-blush-100 px-2.5 py-1 text-xs font-medium text-blush-700">{category}</span>
      </div>

      <h2 className="mt-4 text-xl font-bold text-ink">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">{content}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="rounded-full bg-soft px-2 py-1 text-xs text-slate-600">{tag}</span>
        ))}
      </div>

      {image && (
        <img src={image} alt={title} className="mt-4 h-[320px] w-full rounded-2xl object-cover" />
      )}

      <div className="mt-4 flex items-center justify-between border-t border-line pt-4 text-sm text-slate-600">
        <div className="flex items-center gap-5">
          <span>❤ {likes}</span>
          <span>💬 {comments}</span>
          <span>🔖 {saves}</span>
        </div>
        <a href="/post/1" className="font-medium text-blush-700">상세 보기</a>
      </div>
    </article>
  );
}
