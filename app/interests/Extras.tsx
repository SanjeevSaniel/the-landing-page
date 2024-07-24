import React from 'react'
import Marquee from "react-fast-marquee";
import {Image} from "@nextui-org/react"; 
import Link from 'next/link';
// import NextImage from "next/image"; 

const Extras = ({ profileLink, photos }: { profileLink: string, photos: [] }) => {
  // const photos = [0,1,2,3,4,5,6,7]

  return (
      <div className="m-4 p-8">
        <div className='flex items-center gap-2 px-2 py-1 rounded-lg w-fit'>
        {/* <Image
          width={30}
          height={30}
          src={
            'https://www.pexels.com/assets/_svg/logo-5ee7c1d7e25a1c5066520202eb5c41bd4c0a479e9a68911aa54d785c2e22d565.svg'
          }
          alt={'Pexels'}
        /> */}
        <Link
          href={profileLink}
          target='_blank'
          className='text-lg text-white hover:underline font-medium'>
          More on Pexels
        </Link>
      </div>

        <div className="p-2">
          <Marquee speed={100}>
{Array.from({ length: 15 }).map((u, i) => (
          <Image    
          key={i}
      // as={NextImage}
      width={300}
      height={200}
      src='https://images.pexels.com/photos/17965125/pexels-photo-17965125/free-photo-of-atal-foot-over-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      alt="NextUI hero Image"
      className="p-2"
    />
        ))}

        </Marquee>
        </div>

      </div>
     
  )
}

export default Extras