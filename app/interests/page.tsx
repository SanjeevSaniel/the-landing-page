import React from 'react';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import clsx from 'clsx';
import PhotosCollection from './PhotosCollection';
import PhotosCollectionMobile from './PhotosCollectionMobile';

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

const InterestsPage = () => {
  const profileLink = 'https://www.pexels.com/@sanjeev-saniel-875428/';

  return (
    <div className={clsx(montserrat.className, 'px-6 py-20 bg-amber-200')}>
      <div className='flex justify-center items-center gap-1'>
        <Link
          href={profileLink}
          target='_blank'>
          <Image
            width={50}
            height={50}
            src={
              'https://www.pexels.com/assets/_svg/logo-5ee7c1d7e25a1c5066520202eb5c41bd4c0a479e9a68911aa54d785c2e22d565.svg'
            }
            alt={'Pexels'}
          />
        </Link>
        <div className='ml-2 text-xl'>|</div>
        <h1 className='text-[2.5rem] md:text-[5rem] text-center'>
          Photography
        </h1>
      </div>

      <PhotosCollectionMobile />
      <PhotosCollection profileLink={profileLink} />
    </div>
  );
};

export default InterestsPage;
