import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    // <div className='layout-container'>

    <main>
      <Navbar />
      {children}
      <Footer />
    </main>

    // </div>
  );
};

export default Layout;
