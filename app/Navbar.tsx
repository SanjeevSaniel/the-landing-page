'use client';

import React from 'react';
import { Salsa } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const salsa = Salsa({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    // { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Career', path: '/career' },
    { id: 3, label: 'Interests', path: '/interests' },
  ];

  return (
    <div className={salsa.className}>
      <nav
        className={`flex justify-between px-4 md:px-20 py-3 text-xl font-semibold z-20`}>
        <Link href='/' className="hover:text-amber-500 transition-all duration-500 drop-shadow-xl">SK</Link>
        {/* <ul className='hidden md:flex gap-4'>
          {links.map((link) => (
            <Link
              key={link.id}
              href={`${link.path}`}
              className={classnames({
                'text-amber-500': link.path === currentPath,
                'text-zinc-500': link.path !== currentPath,
                'hover:text-amber-500 cursor-pointer': true,
              })}>
              {link.label}
            </Link>
          ))}
        </ul> */}
      </nav>
    </div>
  );
};

export default Navbar;
