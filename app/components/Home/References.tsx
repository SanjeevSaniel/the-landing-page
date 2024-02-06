import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const References = () => {
  const referenceLinks = [
    {
      id: 1,
      icon: 'https://img.icons8.com/fluency/48/linkedin.png',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sanjeevsaniel/',
      username: 'sanjeevsaniel',
      description: 'Connect and build network',
    },
    {
      id: 2,
      icon: 'https://img.icons8.com/ios-filled/50/github.png',
      name: 'Github',
      url: 'https://github.com/SanjeevSaniel',
      username: 'sanjeevsaniel',
      description: 'Collaborate and code',
    },
    {
      id: 3,
      icon: 'https://www.pexels.com/assets/_svg/logo-5ee7c1d7e25a1c5066520202eb5c41bd4c0a479e9a68911aa54d785c2e22d565.svg',
      name: 'Pexels',
      url: 'https://www.pexels.com/@sanjeev-saniel-875428/',
      username: 'sanjeev-saniel-875428',
      description: 'Capture moments and share',
    },
  ];

  return (
    <div className='flex flex-col gap-2 my-10'>
      {referenceLinks.map((reference) => (
        <div
          key={reference.id}
          className='flex gap-2 bg-amber-300 px-2 py-1 rounded-lg w-fit'>
          <Image
            width={20}
            height={20}
            src={reference.icon}
            alt={reference.name}
          />
          <Link
            href={reference.url}
            className='text-[15px] text-gray-700 hover:underline'>
            {reference.description}
          </Link>
        </div>
      ))}
      {/* <span className='text-[15px] px-2'>|</span> */}
      {/* <div className='flex gap-1'>
        <Image
          width={20}
          height={20}
          src='https://img.icons8.com/ios-filled/50/github.png'
          alt='Github'
        />
        <Link
          href='https://github.com/SanjeevSaniel/'
          className='text-[15px] text-gray-600 hover:underline'>
          {`collaborate and code`}
        </Link>
      </div>
      {/* <span className='text-[15px] px-2'>|</span> */}

      {/* <div className='flex gap-1'>
        <Image
          width={20}
          height={20}
          src='https://www.pexels.com/assets/_svg/logo-5ee7c1d7e25a1c5066520202eb5c41bd4c0a479e9a68911aa54d785c2e22d565.svg'
          alt='Pexels'
        />
        <Link
          href='https://www.pexels.com/@sanjeev-saniel-875428/'
          className='text-[15px] hover:underline'>
          {`capture moments and share`}
        </Link>
      </div> */}
    </div>
  );
};

export default References;
