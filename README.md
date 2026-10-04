# 냥집사 모임

고양이 애호가들을 위한 실사용형 커뮤니티 SNS입니다.

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase Auth + Postgres + RLS
- Vercel

## 빠른 시작

1. 의존성 설치
   ```bash
   npm install
   ```
2. `.env.local` 생성
   ```bash
   cp .env.example .env.local
   ```
3. Supabase 프로젝트 생성 및 환경 변수 입력
4. 데이터베이스 스키마 적용
   ```bash
   psql -f supabase/schema.sql
   ```
   또는 Supabase SQL Editor에서 실행하세요.
5. 개발 서버 실행
   ```bash
   npm run dev
   ```

## 주요 기능

- 이메일 회원가입/로그인
- 프로필/설정
- 게시글 feed, 좋아요, 댓글, 신고, 북마크
- 카테고리 기반 커뮤니티
- 관리자 페이지 구조
- 모바일 친화적 레이아웃

## 배포

Vercel에 배포할 때는 환경 변수를 프로젝트 설정에 추가하세요.

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_APP_URL`

## 보안 주의사항

- GitHub에 Secret을 업로드하지 마세요
- `RLS`는 Supabase에서 활성화해야 합니다
- 관리자 권한은 서버에서 검증해야 합니다
