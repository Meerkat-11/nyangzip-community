import { AppShell } from '@/components/app-shell';

export default function SignupPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-md rounded-2xl border border-line bg-white p-6 shadow-card">
        <div className="mb-6 text-center">
          <p className="text-lg font-semibold text-blush-700">🐾 냥집사 모임</p>
          <h1 className="mt-2 text-3xl font-bold text-ink">회원가입</h1>
        </div>

        <form className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            닉네임
            <input type="text" className="mt-2 w-full rounded-xl border border-line bg-soft px-3 py-2.5 outline-none focus:border-blush-300" placeholder="고양이바다" />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            이메일
            <input type="email" className="mt-2 w-full rounded-xl border border-line bg-soft px-3 py-2.5 outline-none focus:border-blush-300" placeholder="hello@nyangzip.com" />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            비밀번호
            <input type="password" className="mt-2 w-full rounded-xl border border-line bg-soft px-3 py-2.5 outline-none focus:border-blush-300" placeholder="8자 이상" />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            비밀번호 확인
            <input type="password" className="mt-2 w-full rounded-xl border border-line bg-soft px-3 py-2.5 outline-none focus:border-blush-300" placeholder="다시 입력하세요" />
          </label>

          <button type="submit" className="w-full rounded-xl bg-blush-500 px-4 py-3 font-medium text-white transition hover:bg-blush-600">
            계정 만들기
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-500">
          이미 계정이 있으신가요? <a href="/login" className="font-semibold text-blush-700">로그인</a>
        </p>
      </div>
    </AppShell>
  );
}
