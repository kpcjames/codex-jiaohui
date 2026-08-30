import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '长老会新山宣道教会 | Gereja Presbyterian Clarion',
  description: '长老会新山宣道教会聚会时间、团契活动、地址与联系方式。欢迎来到我们爱与真理的属灵家园。',
  openGraph: {
    title: '长老会新山宣道教会',
    description: '在爱与真理中，一同成长。欢迎来到 Gereja Presbyterian Clarion。',
    images: ['/church-building.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hans">
      <body>{children}</body>
    </html>
  );
}
