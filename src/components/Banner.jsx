import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='container mx-auto'>
      <Image 
        src='/baner.jpg' 
        className='w-full lg:px-24 rounded-lg object-cover' 
        width={400} 
        height={400} 
        alt='banner' 
      />
    </div>
  );
}

export default Banner;