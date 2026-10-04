import { AppShell } from '@/components/app-shell';
import { people } from '@/lib/data';

export default function ProfilePage() {
  const profile = people[0];

  return (
    <AppShell>
      <div className="space-y-6">
        <section className="rounded-2xl border border-line bg-white p-5 shadow-card">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=200&q=80" alt={profile.name} className="h-20 w-20 rounded-full object-cover" />
              <div>
                <h1 className="text-2xl font-bold text-ink">{profile.name}</h1>
                <p className="text-sm text-slate-500">@{profile.username}</p>
                <p className="mt-2 text-sm text-slate-700">{profile.bio}</p>
              </div>
            </div>

            <button className="rounded-full bg-blush-500 px-5 py-2.5 font-medium text-white hover:bg-blush-600">
              팔로우
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-soft p-4">
              <p className="text-xl font-bold text-ink">128</p>
              <p className="text-xs text-slate-500">게시글</p>
            </div>
            <div className="rounded-xl bg-soft p-4">
              <p className="text-xl font-bold text-ink">{profile.followers}</p>
              <p className="text-xs text-slate-500">팔로워</p>
            </div>
            <div className="rounded-xl bg-soft p-4">
              <p className="text-xl font-bold text-ink">{profile.following}</p>
              <p className="text-xs text-slate-500">팔로잉</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-line bg-white p-5 shadow-card">
          <h2 className="text-xl font-bold text-ink">작성 게시글</h2>
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-xl border border-line bg-soft p-4">
                <p className="text-sm text-slate-500">2일 전 · 고양이 자랑</p>
                <h3 className="mt-2 text-lg font-bold text-ink">우리집 고양이의 특별한 하루 #{item}</h3>
                <p className="mt-2 text-sm text-slate-700">오늘도 햇살 아래에서 푹 자는 모습을 보며 집사가 가장 행복한 순간이라는 걸 느꼈습니다.</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
