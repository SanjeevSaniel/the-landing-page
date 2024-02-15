import React from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Tooltip,
} from '@nextui-org/react';
import Link from 'next/link';
import { Montserrat, Kalam } from 'next/font/google';
import clsx from 'clsx';
import PhotosCollection from './PhotosCollection';
import PhotosCollectionMobile from './PhotosCollectionMobile';

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});
const kalam = Kalam({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

const InterestsPage = () => {
  const PROFILE_URL = 'https://www.pexels.com/@sanjeev-saniel-875428/';

  const PHOTOS_SET_1 = [4, 8, 9, 10];
  const PHOTOS_SET_2 = [0, 1, 2, 3];
  const allPhotos = [
    {
      id: 1,
      sourceUrl:
        'https://images.pexels.com/photos/17965125/pexels-photo-17965125/free-photo-of-atal-foot-over-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Atal Bridge',
      location: 'Ahmedabad, Gujarat, India',
      description: 'Pedestrian triangular truss bridge.',
      iso: '320',
      focalLength: '13',
      aperture: 'ƒ/2.2',
      shutterSpeed: '1/35',
    },
    {
      id: 2,
      sourceUrl:
        'https://images.pexels.com/photos/17465412/pexels-photo-17465412/free-photo-of-konark-sun-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Konark Sun Temple',
      location: 'Konark, Odisha, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
      iso: '25',
      focalLength: '23',
      aperture: 'f/1.8',
      shutterSpeed: '1/1476',
    },
    {
      id: 3,
      sourceUrl:
        'https://images.pexels.com/photos/16287591/pexels-photo-16287591/free-photo-of-st-paul-s-cathedral.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: `St. Paul's Cathedral Church`,
      location: 'Kolkata, West Bengal, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
      iso: '50',
      focalLength: '4.67',
      aperture: 'f/2.0',
      shutterSpeed: '1/1100',
    },
    {
      id: 4,
      sourceUrl:
        'https://images.pexels.com/photos/16090635/pexels-photo-16090635/free-photo-of-james-princep-memorial.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'James Princep Memorial',
      location: 'Kolkata, West Bengal, India',
      description:
        'The monument is one of the finest examples of colonial architecture in Kolkata.',
      iso: '50',
      focalLength: '4.67',
      aperture: 'f/2.0',
      shutterSpeed: '1/1000',
    },
    {
      id: 5,
      sourceUrl:
        'https://images.pexels.com/photos/17724358/pexels-photo-17724358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Teesta Valley Forest',
      location: 'Darjeeling, West Bengal, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
      iso: '50',
      focalLength: '23',
      aperture: 'f/1.8',
      shutterSpeed: '1/1000',
    },
    {
      id: 6,
      sourceUrl:
        'https://images.pexels.com/photos/19665118/pexels-photo-19665118/free-photo-of-museum.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Kala Bhoomi - Odisha Crafts Museum',
      location: 'Bhubaneswar, Odisha, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
      iso: '',
      focalLength: '',
      aperture: '',
      shutterSpeed: '',
    },
    {
      id: 7,
      sourceUrl:
        'https://images.pexels.com/photos/17465413/pexels-photo-17465413/free-photo-of-qutub-minar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Qutub Minar',
      location: 'Delhi, India',
      description: 'A minaret and victory tower.',
      iso: '80',
      focalLength: '24',
      aperture: 'f/1.8',
      shutterSpeed: '1/1200',
    },
    {
      id: 8,
      sourceUrl:
        'https://images.pexels.com/photos/16287585/pexels-photo-16287585/free-photo-of-nehru-museum-iit-kharagpur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Nehru Museum - IIT Kharagpur',
      location: 'Kharagpur, West Bengal, India',
      description: 'Nehru Museum',
      iso: '30',
      focalLength: '22',
      aperture: 'f/1.8',
      shutterSpeed: '1/1000',
    },
    {
      id: 9,
      sourceUrl:
        'https://images.pexels.com/photos/18118377/pexels-photo-18118377.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      title: 'Statue Of Unity',
      location: 'Kevadia, Gujarat, India',
      description: "The iron man of India's freedom struggle and unification",
      iso: '25',
      focalLength: '25',
      aperture: 'f/1.8',
      shutterSpeed: '1/1000',
    },
    {
      id: 10,
      sourceUrl:
        'https://images.pexels.com/photos/17863580/pexels-photo-17863580/free-photo-of-hadimba-devi-temple.jpeg',
      title: 'Hadimba Devi Temple',
      location: 'Manali Himachal Pradesh, India',
      description:
        'The temple is locally known as Dhungri Temple since it lies in the Dhungri forest area of Manali.',
      iso: '100',
      focalLength: '24',
      aperture: 'f/1.8',
      shutterSpeed: '1/1000',
    },
    {
      id: 11,
      sourceUrl:
        'https://images.pexels.com/photos/16287649/pexels-photo-16287649/free-photo-of-naggar-kullu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Naggar Mahal',
      location: 'Kullu, Himachal Pradesh, India',
      description: "The iron man of India's freedom struggle and unification",
      iso: '50',
      focalLength: '26',
      aperture: 'f/1.8',
      shutterSpeed: '1/800',
    },
  ];
  return (
    <div className={'max-w-[1440px] m-auto px-6 py-20 bg-amber-200'}>
      <div
        className={clsx(
          montserrat.className,
          'flex justify-center items-center gap-1',
        )}>
        <Link
          href={PROFILE_URL}
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

      <div
        className={clsx(
          montserrat.className,
          'hidden md:flex md:flex-col gap-10 my-10',
        )}>
        <div className='flex justify-center items-center gap-10'>
          {/* <Link
          href={PROFILE_URL}
          target='_blank'>
          <Image
            width={50}
            height={50}
            src={
              'https://www.pexels.com/assets/_svg/logo-5ee7c1d7e25a1c5066520202eb5c41bd4c0a479e9a68911aa54d785c2e22d565.svg'
            }
            alt={'Pexels'}
          />
        </Link> */}
          {/* <div className='ml-2 text-xl'>|</div> */}
          <h1
            className={clsx(
              kalam.className,
              'text-[2.5rem] md:text-[4.5rem] text-gray-800 drop-shadow-md text-center',
            )}>
            Landscapes
          </h1>

          <div className='md:grid grid-cols-2 auto-rows-auto gap-3 bg-transparent'>
            {PHOTOS_SET_1.map((c) => (
              <Card
                key={c}
                className='col-span-2 sm:col-span-1 w-[400px] h-[300px] drop-shadow-lg'>
                <CardHeader className='absolute z-10 top-5 left-4 flex-col !items-start'>
                  <div className='flex gap-2 items-center '>
                    <div className='w-[12px] ml-1 inline-flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 384 512'>
                        <path
                          fill='rgb(167, 53, 53)'
                          d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z'
                        />
                      </svg>
                    </div>
                    <p className='px-1 text-tiny text-white/80 bg-white/10 uppercase font-bold'>
                      {allPhotos[c].location}
                    </p>
                  </div>

                  <h4 className='px-2 mt-1 text-black bg-white/60 rounded-lg font-medium text-large'>
                    {allPhotos[c].title}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt='Card background'
                  className='z-0 w-full h-full object-cover'
                  src={allPhotos[c].sourceUrl}
                />

                <CardFooter className='flex justify-end absolute bottom-3 right-3 z-10 '>
                  <Tooltip
                    key={'top-end'}
                    placement={'top-end'}
                    content={
                      <div className='flex gap-2 p-2 opacity-1'>
                        <div className='text-right text-sm text-gray-300'>
                          <div>ISO:</div>
                          <div>Focal length:</div>
                          <div>Aperture:</div>
                          <div>Shutter speed:</div>
                        </div>

                        <div className='text-white'>
                          <div>
                            {allPhotos[c].iso ? allPhotos[c].iso : <br />}
                          </div>
                          <div>
                            {allPhotos[c].focalLength ? (
                              allPhotos[c].focalLength + ' mm'
                            ) : (
                              <br />
                            )}
                          </div>
                          <div>
                            {allPhotos[c].aperture ? (
                              allPhotos[c].aperture
                            ) : (
                              <br />
                            )}
                          </div>
                          <div>
                            {allPhotos[c].shutterSpeed ? (
                              allPhotos[c].shutterSpeed + ' s'
                            ) : (
                              <br />
                            )}
                          </div>
                        </div>
                      </div>
                    }
                    className='p-0 bg-black/80'>
                    <div className='w-[30px] inline-flex bg-red-500 rounded-[100%]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'>
                        <path
                          fill='#ffd950'
                          d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'
                        />
                      </svg>
                    </div>
                  </Tooltip>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className='flex justify-center items-center relative'>
          <div
            className={clsx(
              montserrat.className,
              'md:grid grid-cols-3 auto-rows-auto gap-4 bg-transparent',
            )}>
            {PHOTOS_SET_2.map((c) => (
              <Card
                key={c}
                className='col-span-3 sm:col-span-1 h-[300px] drop-shadow-lg'>
                <CardHeader className='absolute z-10 top-5 left-4 flex-col !items-start'>
                  <div className='flex gap-2 items-center '>
                    <div className='w-[12px] ml-1 inline-flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 384 512'>
                        <path
                          fill='rgb(167, 53, 53)'
                          d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z'
                        />
                      </svg>
                    </div>
                    <p className='px-1 text-tiny text-white/80 bg-white/10 uppercase font-bold'>
                      {allPhotos[c].location}
                    </p>
                  </div>

                  <h4 className='px-2 mt-1 text-black bg-white/60 rounded-lg font-medium text-large'>
                    {allPhotos[c].title}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt='Card background'
                  className='z-0 w-full h-full object-cover'
                  src={allPhotos[c].sourceUrl}
                />

                <CardFooter className='flex justify-end absolute bottom-3 right-3 z-10 '>
                  <Tooltip
                    key={'top-end'}
                    placement={'top-end'}
                    content={
                      <div className='flex gap-2 p-2 opacity-1'>
                        <div className='text-right text-sm text-gray-300'>
                          <div>ISO:</div>
                          <div>Focal length:</div>
                          <div>Aperture:</div>
                          <div>Shutter speed:</div>
                        </div>

                        <div className='text-white'>
                          <div>
                            {allPhotos[c].iso ? allPhotos[c].iso : <br />}
                          </div>
                          <div>
                            {allPhotos[c].focalLength ? (
                              allPhotos[c].focalLength + ' mm'
                            ) : (
                              <br />
                            )}
                          </div>
                          <div>
                            {allPhotos[c].aperture ? (
                              allPhotos[c].aperture
                            ) : (
                              <br />
                            )}
                          </div>
                          <div>
                            {allPhotos[c].shutterSpeed ? (
                              allPhotos[c].shutterSpeed + ' s'
                            ) : (
                              <br />
                            )}
                          </div>
                        </div>
                      </div>
                    }
                    className='p-0 bg-black/80'>
                    <div className='w-[30px] inline-flex bg-red-500 rounded-[100%]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'>
                        <path
                          fill='#ffd950'
                          d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'
                        />
                      </svg>
                    </div>
                  </Tooltip>
                </CardFooter>
              </Card>
            ))}
          </div>

          <h1
            className={clsx(
              kalam.className,
              'absolute left-[50%] bottom-[20%] text-[2.5rem] md:text-[4.5rem] text-gray-800 drop-shadow-md text-center',
            )}>
            Architectures
          </h1>
        </div>
      </div>

      <PhotosCollectionMobile />
      {/* <PhotosCollection profileLink={PROFILE_URL} /> */}
    </div>
  );
};

export default InterestsPage;
