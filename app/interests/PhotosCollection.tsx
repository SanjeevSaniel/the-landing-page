import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Tooltip,
} from '@nextui-org/react';
import Link from 'next/link';

const PhotosCollection = () => {
  const photos = [
    {
      id: 1,
      sourceUrl:
        'https://images.pexels.com/photos/17965125/pexels-photo-17965125/free-photo-of-atal-foot-over-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Atal Bridge',
      location: 'Ahmedabad, Gujarat, India',
      description: 'Pedestrian triangular truss bridge.',
    },
    {
      id: 2,
      sourceUrl:
        'https://images.pexels.com/photos/17465412/pexels-photo-17465412/free-photo-of-konark-sun-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Konark Sun Temple',
      location: 'Konark, Odisha, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
    },
    {
      id: 3,
      sourceUrl:
        'https://images.pexels.com/photos/16287591/pexels-photo-16287591/free-photo-of-st-paul-s-cathedral.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: `St. Paul's Cathedral Church`,
      location: 'Kolkata, West Bengal, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
    },
    {
      id: 4,
      sourceUrl:
        'https://images.pexels.com/photos/16090635/pexels-photo-16090635/free-photo-of-james-princep-memorial.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'James Princep Memorial',
      location: 'Kolkata, West Bengal, India',
      description:
        'The monument is one of the finest examples of colonial architecture in Kolkata.',
    },
    {
      id: 5,
      sourceUrl:
        'https://images.pexels.com/photos/17724358/pexels-photo-17724358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Teesta Valley Forest',
      location: 'Darjeeling, West Bengal, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
    },
    {
      id: 6,
      sourceUrl:
        'https://images.pexels.com/photos/19665118/pexels-photo-19665118/free-photo-of-museum.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Kala Bhoomi - Odisha Crafts Museum',
      location: 'Bhubaneswar, Odisha, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
    },
    {
      id: 7,
      sourceUrl:
        'https://images.pexels.com/photos/17465413/pexels-photo-17465413/free-photo-of-qutub-minar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Qutub Minar',
      location: 'Delhi, India',
      description: 'A minaret and victory tower.',
    },
    {
      id: 8,
      sourceUrl:
        'https://images.pexels.com/photos/16287585/pexels-photo-16287585/free-photo-of-nehru-museum-iit-kharagpur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Nehru Museum - IIT Kharagpur',
      location: 'Kharagpur, West Bengal, India',
      description: 'Nehru Museum',
    },
    {
      id: 9,
      sourceUrl:
        'https://images.pexels.com/photos/18118377/pexels-photo-18118377.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      title: 'Statue Of Unity',
      location: 'Kevadia, Gujarat, India',
      description: "The iron man of India's freedom struggle and unification",
    },
  ];

  const tooltipInfo = <div>Tooltip</div>;

  return (
    <div className='flex flex-col gap-6 px-12'>
      <div className='hidden md:grid grid-cols-12 auto-rows-auto gap-4 bg-transparent'>
        {[0, 1, 2].map((c) => (
          <Card
            key={c}
            className='col-span-12 sm:col-span-4 h-[300px]'>
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
                  {photos[c].location}
                </p>
              </div>

              <h4 className='px-2 mt-1 text-black bg-white/60 rounded-lg font-medium text-large'>
                {photos[c].title}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt='Card background'
              className='z-0 w-full h-full object-cover'
              src={photos[c].sourceUrl}
            />

            <CardFooter className='flex justify-end absolute bottom-3 right-3 z-10 '>
              <Tooltip
                key={'top-end'}
                placement={'top-end'}
                content={tooltipInfo}
                color='secondary'>
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

        <Card
          // isFooterBlurred
          className='w-full h-[28rem] col-span-12 sm:col-span-5'>
          <CardHeader className='absolute z-10 top-1 flex-col items-start'>
            <CardHeader className='absolute z-10 top-5 left-4 flex-col items-start'>
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
                <p className='px-1 text-tiny text-gray-700 bg-white/10 capitalize font-bold'>
                  {photos[3].location}
                </p>
              </div>

              <h4 className='px-2 mt-2 text-black bg-white/60 rounded-lg font-medium text-large'>
                {photos[3].title}
              </h4>
            </CardHeader>
          </CardHeader>
          <Image
            removeWrapper
            alt='Card example background'
            className='z-0 w-full h-full object-fit'
            src={photos[3].sourceUrl}
          />
          <CardFooter className='flex justify-end absolute bottom-3 right-3 z-10 '>
            <Tooltip
              key={'top-end'}
              placement={'top-end'}
              content={tooltipInfo}
              color='secondary'>
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

        <Card
          isFooterBlurred={false}
          className='w-full h-[28rem] col-span-12 sm:col-span-7'>
          <CardHeader className='absolute z-10 top-5 left-4 flex-col items-start'>
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
              <p className='px-1 text-tiny text-black bg-white/10 capitalize font-bold'>
                {photos[4].location}
              </p>
            </div>

            <h4 className='px-2 mt-2 text-black bg-white/60 rounded-lg font-medium text-large'>
              {photos[4].title}
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt='Relaxing app background'
            className='z-0 w-full h-full object-cover'
            src={photos[4].sourceUrl}
          />

          <CardFooter className='flex justify-end absolute bottom-3 right-3 z-10 '>
            <Tooltip
              key={'top-end'}
              placement={'top-end'}
              content={tooltipInfo}
              color='secondary'>
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

        {[6, 7, 8].map((c) => (
          <Card
            key={c}
            className='col-span-12 sm:col-span-4 h-[300px]'>
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
                  {photos[c].location}
                </p>
              </div>

              <h4 className='px-2 mt-1 text-black bg-white/60 rounded-lg font-medium text-large'>
                {photos[c].title}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt='Card background'
              className='z-0 w-full h-full object-cover'
              src={photos[c].sourceUrl}
            />

            <CardFooter className='flex justify-end absolute bottom-3 right-3 z-10 '>
              <Tooltip
                key={'top-end'}
                placement={'top-end'}
                content={tooltipInfo}
                color='secondary'>
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

      <div className='flex items-center gap-2 px-2 py-1 rounded-lg w-fit'>
        <Image
          width={30}
          height={30}
          src={
            'https://www.pexels.com/assets/_svg/logo-5ee7c1d7e25a1c5066520202eb5c41bd4c0a479e9a68911aa54d785c2e22d565.svg'
          }
          alt={'Pexels'}
        />
        <Link
          href={'https://www.pexels.com/@sanjeev-saniel-875428/'}
          target='_blank'
          className='text-lg text-gray-700 hover:underline font-medium'>
          More on Pexels
        </Link>
      </div>
    </div>
  );
};

export default PhotosCollection;
