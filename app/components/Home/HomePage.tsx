import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Salsa } from 'next/font/google';

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
      {/* TODO: Career */}
      <section className={`grid grid-cols-3 p-10`}>
        <div className='text-center text-3xl'>
          <h1>Career</h1>
        </div>
        <div className='col-span-2 text-[1.2rem] space-y-6'>
          <p>
            I have <strong>3+ years</strong> of professional experience in
            software engineering building and providing CRM solutions alongwith
            hands-on in a frontend development.
          </p>
          <p>
            At my current position, I have continuously build and deliver the
            work flow and the experience using my skillsets.
          </p>
        </div>
      </section>
      {/* TODO: Skills */}
      <section className={`grid grid-cols-3 p-10`}>
        <div className='text-center text-3xl'>
          <h1>Skills</h1>
        </div>
        <div className='col-span-2 text-[1.2rem] space-y-6'>
          <div className='flex gap-6'>
            <div>
              <h1 className='w-[220px] bg-amber-300 px-3 py-1 border-solid border-gray-200 border-[1px]'>
                Technical
              </h1>
              <ul className='p-3'>
                <li>Next</li>
                <li>React</li>
                <li>Typescript</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div>
              <h1 className='w-[220px] bg-amber-300 px-3 py-1 border-solid border-gray-200 border-[1px]'>
                Interpersonal
              </h1>
              <ul className='p-3'>
                <li>Continuous Learning</li>
                <li>Collaboration</li>
                <li>Organization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* TODO: Interests */}
      <section className={`grid grid-cols-3 p-10`}>
        <div className='text-center text-3xl'>
          <h1>Interests</h1>
        </div>
        <div className='col-span-2 text-[1.2rem] space-y-6'>
          <ul>
            <li>Personal finance</li>
            <li>Knowledge about mythology</li>
            <li>Photography</li>
            <li>Technology and architecture</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
