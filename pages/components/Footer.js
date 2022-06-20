import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='w-full flex justify-center items-center h-20 bg-light-navy text-navy '>
      <p>Copyright &copy; {year} Digital Journal</p>
    </footer>
  );
};

export default Footer;
