import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Salsa } from 'next/font/google';
import About from './About';

const salsa = Salsa({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const imageStyle = {
  borderRadius: '20%',
  border: '2px solid #fde68a',
};

const HomePage = () => {
  const profileImage = `https://media.licdn.com/dms/image/C5603AQE7PKuFSh_o5g/profile-displayphoto-shrink_400_400/0/1601485975862?e=1710979200&v=beta&t=Zk_bnDxlLMfm9bdaF20xVUlgD0jfOxUp38mhK8vhCpw`;

  return (
    <main>
      <section
        className={`flex justify-center items-center md:gap-40 px-4 md:px-20 py-20 bg-amber-200`}>
        <p
          className={clsx(
            salsa.className,
            'text-5xl',
          )}>{`hey, I'm Sanjeev Kujur.`}</p>
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

      <About />
    </main>
  );
};

export default HomePage;
