import { AppShell } from '@/components/app-shell';

export default function CreatePage() {
  return (
    <AppShell>
      <div className="max-w-3xl rounded-2xl border border-line bg-white p-5 shadow-card">
        <h1 className="text-2xl font-bold text-ink">새 게시글 작성</h1>
        <p className="mt-1 text-sm text-slate-600">고양이 이야기를 공유해보세요.</p>

        <form className="mt-6 space-y-5">
          <label className="block text-sm font-medium text-slate-700">
            카테고리
            <select className="mt-2 w-full rounded-xl border border-line bg-soft px-3 py-2.5 outline-none focus:border-blush-300">
              <option>🐱 고양이 자랑</option>
              <option>📸 고양이 사진</option>
              <option>💬 자유게시판</option>
              <option>🐾 고양이 정보</option>
              <option>❓ 질문</option>
              <option>🏠 집사 일상</option>
            </select>
          </label>

          <label className="block text-sm font-medium text-slate-700">
            제목
            <input type="text" className="mt-2 w-full rounded-xl border border-line bg-soft px-3 py-2.5 outline-none focus:border-blush-300" placeholder="제목을 입력하세요" />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            내용
            <textarea rows={8} className="mt-2 w-full rounded-xl border border-line bg-soft px-3 py-2.5 outline-none focus:border-blush-300" placeholder="오늘의 고양이 이야기를 적어보세요." />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            해시태그
            <input type="text" className="mt-2 w-full rounded-xl border border-line bg-soft px-3 py-2.5 outline-none focus:border-blush-300" placeholder="#고양이 #집사일상" />
          </label>

          <div className="rounded-xl border border-dashed border-blush-200 bg-blush-50 p-4 text-sm text-slate-600">
            사진 업로드 영역 (최대 10장, 10MB 이하, jpg/png/webp만 허용)
          </div>

          <div className="flex justify-end">
            <button type="submit" className="rounded-xl bg-blush-500 px-5 py-3 font-medium text-white transition hover:bg-blush-600">
              게시글 올리기
            </button>
          </div>
        </form>
      </div>
    </AppShell>
  );
}
