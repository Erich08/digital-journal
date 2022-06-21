import React from 'react';
import Link from 'next/link';
import { FaScroll } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className='flex justify-between w-2/3 mx-auto my-auto h-28 items-center font-mono text-white'>
      <h1 className='text-2xl font-bold flex gap-3 items-center'>
        <span>
          <FaScroll size={35} />
        </span>
        Digital Journal App
      </h1>
      <nav>
        <ul className='hidden md:flex gap-10 text-xl font-mono uppercase'>
          <li className='hover:bg-light-navy  cursor-pointer rounded-md'>
            <Link href='/' for='Home'>
              <a className='p-2'>Home</a>
            </Link>
          </li>
          <li className='hover:bg-light-navy cursor-pointer rounded-md'>
            <Link href='/components/Entries' for='Entries'>
              <a className='p-2'>Entries</a>
            </Link>
          </li>
          <li className='hover:bg-light-navy  cursor-pointer rounded-md'>
            <a className='p-2'>Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
