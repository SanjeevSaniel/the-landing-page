'use client';

import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  Image,
  Button,
  Pagination,
  Tooltip,
} from '@nextui-org/react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import clsx from 'clsx';

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

const InterestsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const photos = [
    {
      id: 1,
      sourceUrl:
        'https://images.pexels.com/photos/17965125/pexels-photo-17965125/free-photo-of-atal-foot-over-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Atal Pedestrian Bridge',
      location: 'Ahmedabad, Gujarat, India',
      description: 'Pedestrian triangular truss bridge.',
    },
    {
      id: 2,
      sourceUrl:
        'https://images.pexels.com/photos/16090635/pexels-photo-16090635/free-photo-of-james-princep-memorial.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'James Princep Memorial',
      location: 'Kolkata, West Bengal, India',
      description:
        'The monument is one of the finest examples of colonial architecture in Kolkata.',
    },
    {
      id: 3,
      sourceUrl:
        'https://images.pexels.com/photos/17465412/pexels-photo-17465412/free-photo-of-konark-sun-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Konark Sun Temple',
      location: 'Konark, Odisha, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
    },
    {
      id: 4,
      sourceUrl:
        'https://images.pexels.com/photos/17724358/pexels-photo-17724358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Teesta Valley Forest',
      location: 'Teesta Valley Forest, West Bengal, India',
      description: `Built in the 13th century, it is one of India's most famous Brahman sanctuaries.`,
    },
    {
      id: 5,
      sourceUrl:
        'https://images.pexels.com/photos/16287591/pexels-photo-16287591/free-photo-of-st-paul-s-cathedral.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: `St. Paul's Cathedral Church`,
      location: 'Kolkata, West Bengal, India',
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
  ];

  // setTimeout(() => {
  //     currentPage === photos.length
  //       ? setCurrentPage(1)
  //       : setCurrentPage((prev) => prev + 1);
  //   }, 5000);

  // const handlePhotosSlide = (n) => {
    
  // };

  // useEffect(() => {
  //   handlePhotosSlide(currentPage);
  // }, [currentPage]);

  return (
    <div
      className={clsx(
        montserrat.className,
        'pt-[10rem] px-6 pb-20 bg-amber-200',
      )}>
      <h1 className='text-[2.5rem] md:text-[5rem] text-center mb-10'>
        Photography
      </h1>
      <div className='flex flex-col gap-10 items-center '>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 px-2 py-1 rounded-lg w-fit'>
            <Image
              width={20}
              height={20}
              src={
                'https://www.pexels.com/assets/_svg/logo-5ee7c1d7e25a1c5066520202eb5c41bd4c0a479e9a68911aa54d785c2e22d565.svg'
              }
              alt={'Pexels'}
            />
            <Link
              href={'https://www.pexels.com/@sanjeev-saniel-875428/'}
              className='text-[15px] text-gray-700 hover:underline font-medium'>
              More on Pexels
            </Link>
          </div>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 max-w-[1200px] m-auto p-4'
            shadow='lg'>
            <CardBody>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-center'>
                <div className='relative'>
                  <Image
                    alt='Album cover'
                    className='object-cover'
                    shadow='sm'
                    src={photos[currentPage - 1].sourceUrl}
                    width='100%'
                    height='100%'
                  />
                </div>

                <div className='flex flex-col flex-wrap gap-4 justify-between m-auto p-4'>
                  <div className='flex flex-col items-center gap-2 text-center'>
                    <h1 className='text-4xl text-center pb-3'>
                      {photos[currentPage - 1].title}
                    </h1>
                    <p className='flex gap-2 items-start'>
                      <div className='w-[15px] inline-flex'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 384 512'>
                          <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
                        </svg>
                      </div>
                      <span className='text-gray-600 text-wrap'>
                        {photos[currentPage - 1].location}
                      </span>
                    </p>
                    <p className='mt-2 text-wrap text-center'>
                      {photos[currentPage - 1].description}
                    </p>
                  </div>
                  {/* <div className='flex gap-4 items-center'>
                    <Tooltip
                      placement='top-start'
                      content='I am a tooltip'>
                      <Button
                        // color='bordered'
                        variant='flat'
                        startContent={
                          <div className='w-[14px]'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 512 512'>
                              <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z' />
                            </svg>
                          </div>
                        }
                        className='font-semibold'>
                        info
                      </Button>
                    </Tooltip>
                  </div> */}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className='flex flex-wrap gap-4 items-center'>
          <Pagination
            showShadow
            total={photos.length}
            initialPage={1}
            variant='flat'
            color='warning'
            page={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default InterestsPage;
