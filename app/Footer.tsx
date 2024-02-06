import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip } from '@nextui-org/react';

const Footer = () => {
  return (
    <section className='flex justify-between items-end px-6 md:px-20 py-5 text-sm text-gray-700'>
      <div>
        <div>&copy; {new Date().getFullYear()}, SK.</div>
        <div>Connecting is better.</div>
      </div>
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
