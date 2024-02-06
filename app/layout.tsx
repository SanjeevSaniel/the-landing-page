import Navbar from '@/app/Navbar';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Page',
  description: 'The Landing Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='icon'
          href='https://img.icons8.com/arcade/64/overview-pages-2.png'
        />
      </Head>
      <body className={clsx(inter.className, 'relative bg-amber-200')}>
        <Providers>
          <div className='flex flex-col'>
            <div className='sticky top-0 z-30'>
              <Navbar />
            </div>
            <main>{children}</main>
            <div>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
