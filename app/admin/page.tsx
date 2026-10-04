import { AppShell } from '@/components/app-shell';

export default function AdminPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <section className="rounded-2xl border border-line bg-white p-5 shadow-card">
          <h1 className="text-2xl font-bold text-ink">관리자 대시보드</h1>
          <p className="mt-1 text-sm text-slate-600">운영 상태와 신고, 게시글, 사용자 활동을 확인하세요.</p>
        </section>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['회원 수', '24,893'],
            ['신고', '14건'],
            ['게시글', '1,203'],
            ['활동 로그', '7,104']
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-line bg-white p-5 shadow-card">
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-3 text-2xl font-bold text-ink">{value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
            <h2 className="text-xl font-bold text-ink">신고 관리</h2>
            <div className="mt-4 space-y-3">
              {['스팸 게시글', '괴롭힘 댓글', '광고 계정'].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-line bg-soft p-3 text-sm text-slate-700">
                  <span>{item}</span>
                  <button className="rounded-full bg-blush-100 px-2 py-1 text-blush-700">검토</button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
            <h2 className="text-xl font-bold text-ink">공지사항 관리</h2>
            <div className="mt-4 space-y-3">
              {['커뮤니티 이용 안내', '업데이트 공지', '운영 정책 변경'].map((item) => (
                <div key={item} className="rounded-xl border border-line bg-soft p-3 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
