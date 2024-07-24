'use client';

import React, { useState } from 'react';
import CareerPage from '../../career/page';
import InterestsPage from '../../interests/page';

const Carrot = () => {
  const items = [
    { id: 1, label: 'Career' },
    { id: 2, label: 'Interests' },
  ];

  const [currentItem, setCurrentItem] = useState('Career');

  return (
    <div className='flex flex-col relative'>
      <div className='flex'>
        <div
          className={`flex items-center gap-6 p-2 absolute left-[28%] md:left-[40%] lg:left-[42%]`}>
          {items.map((item) => (
            <div
              key={item.id}
              className={`p-2 border-b-4 text-xl cursor-pointer ${
                item.label === currentItem && 'border-blue-500'
              }`}
              onClick={() => setCurrentItem(item.label)}>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div>
        {currentItem.toLowerCase() === 'career' ? (
          <CareerPage />
        ) : (
          <InterestsPage />
        )}
      </div>
    </div>
  );
};

export default Carrot;
