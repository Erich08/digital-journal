import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className='flex h-1/8 items-center justify-center mx-auto my-auto text-center w-3/4 bg-light-navy p-5 rounded-lg shadow-lg'>
      <p className='text-2xl p-5 leading-7 text-navy font-mono text-left'>
        I created <span className='text-white'>Digital Journal</span> for those
        individuals who prefer a more convenient method of journaling.
        Journaling is a great way to organize your thoughts. It also provides
        you a method of tracking progress and growth. It offers you the chance
        to understand yourself on a deeper level. There are countless other
        benefits that can be gained through jornaling. So what are you waiting
        for? Click{' '}
        <Link href=''>
          <a className='text-white bg-navy pl-4 pr-4 rounded-lg cursor-pointer'>
            now
          </a>
        </Link>{' '}
        to get started!{' '}
      </p>
    </div>
  );
};

export default CallToAction;
