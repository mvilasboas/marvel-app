import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Footer from './components/footer';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Marvel App',
  description: "App built for fans of Marvel's Heroes | Marvel App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
