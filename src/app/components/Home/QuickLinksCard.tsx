'use client';

import React, { useState } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  label: string;
  path: string;
}

const QuickLinksCard = ({ label, path }: Props) => {
  const [arrowDirection, setArrowDirection] = useState(0);

  return (
    <div>
      <Card
        className='px-4 py-2 bg-green-200 text-black rounded-lg hover:-translate-y-1 transition-all duration-500'
        onMouseOver={() => setArrowDirection(1)}
        onMouseOut={() => setArrowDirection(0)}>
        <CardBody className='flex flex-col justify-center items-center'>
          <p className='px-6 py-4 text-2xl font-semibold'>{label}</p>
          <Link href={path}>
            <div className='flex justify-center items-center'>
              <span className={`${arrowDirection && 'text-amber-600'}`}>
                Learn more
              </span>
              <Image
                src={
                  'https://img.icons8.com/external-thin-kawalan-studio/24/external-arrow-up-right-arrows-thin-kawalan-studio.png'
                }
                alt='Arrow'
                width={22}
                height={22}
                className={`translate-x-${arrowDirection} -translate-y-${arrowDirection} transition-all duration-500`}
              />
            </div>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default QuickLinksCard;
