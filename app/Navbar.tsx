import React from 'react';
import { Salsa } from 'next/font/google';

const salsa = Salsa({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = () => (
  <div className={salsa.className}>
    <nav
      className={`flex justify-between px-4 md:px-20 py-3 bg-amber-200 text-xl font-semibold`}>
      SK
    </nav>
  </div>
);

export default Navbar;
