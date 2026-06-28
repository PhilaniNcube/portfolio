import '../styles/globals.css';
import Header from '../components/Header';
import Analytics from '../components/analytics/Analytics';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata = {
  title: 'Philani Ncube | Web Developer',
  description:
    'Web developer architecting robust digital solutions — from custom payment gateways to high-volume e-commerce platforms.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <footer className="py-12 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Philani Ncube. All rights reserved.
        </footer>
      </body>
    </html>
  );
}