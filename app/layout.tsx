import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '냥집사 모임',
  description: '고양이를 사랑하는 사람들의 커뮤니티 SNS'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
