import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/Navbar';
import React from 'react';
import Footer from './components/Home/Footer';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Landing Page',
  description: 'The Landing Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='icon'
          href='https://img.icons8.com/arcade/64/overview-pages-2.png'
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
