import React from 'react';
import clsx from 'clsx';
import { Salsa } from 'next/font/google';
import References from './References';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody } from '@nextui-org/react';

const salsa = Salsa({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const imageStyle = {
  borderRadius: '20%',
  border: '5px solid #f6d860',
};

const HomePage = () => {
  const profileImage = `https://media.licdn.com/dms/image/C5603AQE7PKuFSh_o5g/profile-displayphoto-shrink_400_400/0/1601485975862?e=1710979200&v=beta&t=Zk_bnDxlLMfm9bdaF20xVUlgD0jfOxUp38mhK8vhCpw`;

  const links = [
    { id: 1, label: 'Career', path: '/career' },
    { id: 2, label: 'Interests', path: '/interests' },
  ];

  return (
    <main>
      <section
        className={`flex justify-center items-center md:gap-40 px-4 md:px-20 py-20 bg-amber-200`}>
        <div>
          <span
            className={clsx(
              salsa.className,
              'text-5xl md:pl-0',
            )}>{`hey, I'm Sanjeev Kujur.`}</span>

          <References />
        </div>

        <div>
          <Image
            width={200}
            height={200}
            src={profileImage}
            alt='Profile'
            style={imageStyle}
            className='drop-shadow-2xl'
          />
        </div>
      </section>

      <section
        className={clsx(
          salsa.className,
          'flex flex-col items-center gap-10 bg-green-200 px-20 py-16',
        )}>
        <p className='text-xl text-black/90'>More info</p>
        <div className='flex justify-center gap-6'>
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.path}>
              <Card className='hover:text-amber-500 rounded-sm'>
                <CardBody>
                  <p className='px-6 py-4 text-xl font-semibold'>{l.label}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
