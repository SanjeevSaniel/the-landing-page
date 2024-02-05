import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const CareerPage = () => {
  const technicalSkills = [
    {
      id: 7,
      icon: 'https://img.icons8.com/fluency/48/nextjs.png',
      name: 'Next',
    },
    {
      id: 6,
      icon: 'https://img.icons8.com/ultraviolet/40/react--v2.png',
      name: 'React',
    },
    {
      id: 5,
      icon: 'https://img.icons8.com/fluency/48/typescript--v2.png',
      name: 'Typescript',
    },
    {
      id: 4,
      icon: 'https://img.icons8.com/color/48/git.png',
      name: 'Git',
    },
    {
      id: 3,
      icon: 'https://img.icons8.com/color/48/javascript--v1.png',
      name: 'Javascript',
    },
    {
      id: 2,
      icon: 'https://img.icons8.com/color/48/html-5--v1.png',
      name: 'HTML',
    },
    { id: 1, icon: 'https://img.icons8.com/color/48/css3.png', name: 'CSS' },
  ];

  const interpersonalSkills = [
    {
      id: 1,
      icon: 'https://img.icons8.com/ios/50/teaching.png',
      name: 'Continuous Learning',
    },
    {
      id: 2,
      icon: 'https://img.icons8.com/sf-regular/48/collaboration.png',
      name: 'Collaboration',
    },
    {
      id: 3,
      icon: 'https://img.icons8.com/metro/26/parallel-tasks.png',
      name: 'Organization',
    },
  ];

  const interests = [
    {
      id: 1,
      icon: 'https://img.icons8.com/fluency/48/wallet.png',
      name: 'Personal finance',
    },
    {
      id: 2,
      icon: 'https://img.icons8.com/parakeet/48/knowledge-sharing.png',
      name: 'Knowledge about mythology',
    },
    {
      id: 3,
      icon: 'https://img.icons8.com/plasticine/100/compact-camera.png',
      name: 'Photography',
    },
    {
      id: 4,
      icon: 'https://img.icons8.com/pastel-glyph/64/blockchain-technology--v4.png',
      name: 'Technology and architecture',
    },
  ];

  return (
    <div className={montserrat.className}>
      {/* TODO: Career */}
      <section className={`grid grid-cols-1 md:grid-cols-3 p-10`}>
        <div className='text-center text-[40px]'>
          <h1 className='pb-4 md:pb-0 font-medium'>Career</h1>
        </div>
        <div className='col-span-2 text-[18px] space-y-6 md:max-w-[80%]'>
          <p>
            I have <strong>3+ years</strong> of professional experience in
            software engineering building and providing CRM solutions alongwith
            hands-on in a frontend development.
          </p>
          <p>
            At my current position, I continuously build and deliver the work
            flow and the experience using my skillsets.
          </p>
        </div>
      </section>

      {/* TODO: Skills */}
      <section className={`grid grid-cols-1 md:grid-cols-3 p-10`}>
        <div className='text-center text-[40px]'>
          <h1 className='font-medium'>Skills</h1>
        </div>
        <div className='col-span-2 text-[18px] space-y-6'>
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='m-auto md:m-0'>
              <h1 className='w-[220px] bg-amber-300 px-3 py-2 border-solid border-gray-200 border-[1px]'>
                Technical
              </h1>

              <ul className='p-3'>
                {technicalSkills.map((skill) => (
                  <li
                    key={skill.id}
                    className='flex flex-row gap-2 mb-2'>
                    <Image
                      width={30}
                      height={30}
                      src={skill.icon}
                      alt=''
                    />
                    <p>{skill.name}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='max-w-[220px] m-auto md:m-0'>
              <h1 className='bg-amber-300 px-3 py-2 border-solid border-gray-200 border-[1px]'>
                Interpersonal
              </h1>
              <div className='p-3'>
                {interpersonalSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className='flex gap-3 mb-2'>
                    <Image
                      width={24}
                      height={24}
                      src={skill.icon}
                      alt={skill.name}
                      className='h-[30px]'
                    />

                    <p className='leading-6'>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Interests */}
      <section className={`grid  grid-cols-1 md:grid-cols-3 p-10`}>
        <div className='text-center text-[40px]'>
          <h1 className='font-medium'>Interests</h1>
        </div>
        <div className='col-span-2 text-[18px] space-y-6'>
          <div className='p-3'>
            {interests.map((interest) => (
              <div
                key={interest.id}
                className='flex gap-3 mb-2'>
                <Image
                  width={24}
                  height={24}
                  src={interest.icon}
                  alt={interest.name}
                />

                <p className='leading-6'>{interest.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
