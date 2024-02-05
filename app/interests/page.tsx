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
import PhotoCard from './PhotoCard';
import PhotosCollection from './PhotosCollection';
import PhotosCollectionMobile from './PhotosCollectionMobile';

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

const InterestsPage = () => {

  return (
    <div className={clsx(montserrat.className, 'px-6 py-20 bg-amber-200')}>
      <h1 className='text-[2.5rem] md:text-[5rem] text-center mb-5'>
        Photography
      </h1>
      <PhotosCollectionMobile/>
      <PhotosCollection/>
    </div>
  );
};

export default InterestsPage;
