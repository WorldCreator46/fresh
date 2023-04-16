import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: '신선물스토어',
  description: '신선함이 가득한 삶을 위한 최고의 선택',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="navbar">
          <Link href="/">홈</Link>
          <Link href="/list">List</Link>
          <Link href="/cart">장바구니</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
