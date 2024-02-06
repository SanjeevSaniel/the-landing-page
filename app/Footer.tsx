import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip } from '@nextui-org/react';

const Footer = () => {
  return (
    <section className='flex justify-between items-center px-20 py-5 font-medium'>
      <div>&copy; {new Date().getFullYear()}, SK. Connecting is better.</div>
      <Tooltip
        placement='top'
        content='Next.js'
        color='foreground'>
        <Link
          href='https://nextjs.org/'
          target='_blank'
          className='flex items-center gap-1 text-tiny'>
          <span className='hover:text-underline'>built on</span>
          <Image
            width={20}
            height={20}
            src='https://img.icons8.com/fluency/48/nextjs.png'
            alt='Next.js'
          />
        </Link>
      </Tooltip>
    </section>
  );
};

export default Footer;
