import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mirza Muhammad Shehryar | Portfolio',
  description: 'Professional full-stack developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}