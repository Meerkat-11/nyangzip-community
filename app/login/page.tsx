import { AppShell } from '@/components/app-shell';

export default function LoginPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-md rounded-2xl border border-line bg-white p-6 shadow-card">
        <div className="mb-6 text-center">
          <p className="text-lg font-semibold text-blush-700">🐱 냥집사 모임</p>
          <h1 className="mt-2 text-3xl font-bold text-ink">로그인</h1>
        </div>

        <form className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            이메일
            <input type="email" className="mt-2 w-full rounded-xl border border-line bg-soft px-3 py-2.5 outline-none transition focus:border-blush-300" placeholder="hello@nyangzip.com" />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            비밀번호
            <input type="password" className="mt-2 w-full rounded-xl border border-line bg-soft px-3 py-2.5 outline-none transition focus:border-blush-300" placeholder="••••••••" />
          </label>

          <div className="flex items-center justify-between text-sm text-slate-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              로그인 상태 유지
            </label>
            <a href="/signup" className="text-blush-700">비밀번호 재설정</a>
          </div>

          <button type="submit" className="w-full rounded-xl bg-blush-500 px-4 py-3 font-medium text-white transition hover:bg-blush-600">
            로그인
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-500">
          계정이 없으신가요? <a href="/signup" className="font-semibold text-blush-700">회원가입</a>
        </p>
      </div>
    </AppShell>
  );
}
