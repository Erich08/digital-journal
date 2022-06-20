import React from 'react';

const Banner = () => {
  return (
    <div className='w-full bg-light-navy h-96 flex'>
      <div className='flex w-full justify-between items-center'>
        <div className='w-2/3 flex flex-col items-center gap-6'>
          <h1 className='text-4xl font-mono font-bold text-navy'>
            <span className='text-white'>Welcome</span>
            <br /> to Digital Journal!
          </h1>
          <p className='text-xl w-96  text-white mr-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis
            voluptates inventore quis optio suscipit similique voluptate
            quibusdam, a aliquam.
          </p>
        </div>
        <div className='w-96 mr-96'>
          <p className='text-3xl text-navy font-bold leading-10'>
            <em>
              <span className='text-white text-4xl'>I will</span> keep constant
              watch over myself and, most usefully, will put each day up for
              review
            </em>{' '}
          </p>
          <p className='ml-20 text-2xl text-white mt-2'>
            - <em>Seneca The Younger</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
