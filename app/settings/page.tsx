import { AppShell } from '@/components/app-shell';

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="max-w-2xl rounded-2xl border border-line bg-white p-5 shadow-card">
        <h1 className="text-2xl font-bold text-ink">설정</h1>

        <div className="mt-6 space-y-5">
          <div className="rounded-xl border border-line bg-soft p-4">
            <h2 className="font-bold text-ink">프로필</h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>닉네임: 고양이바다</p>
              <p>이메일: hello@nyangzip.com</p>
              <p>소개: 고양이를 사랑하는 집사입니다.</p>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-soft p-4">
            <h2 className="font-bold text-ink">보안</h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>비밀번호 변경</p>
              <p>2단계 인증</p>
              <p>로그인 기기 관리</p>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-soft p-4">
            <h2 className="font-bold text-ink">데이터 관리</h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <p>북마크 관리</p>
              <p>차단 목록</p>
              <p>계정 탈퇴</p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
