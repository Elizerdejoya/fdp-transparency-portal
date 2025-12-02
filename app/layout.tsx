import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FDP Transparency Portal | Batangas LGUs 2019–2023',
  description:
    'An evidence-based digital platform showcasing fiscal transparency and financial performance in Batangas Local Government Units.',
  keywords:
    'FDP, transparency, fiscal management, Batangas, LGU, financial performance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
