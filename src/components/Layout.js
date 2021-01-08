import React from 'react';

const Layout = ({ children }) => {
  return (
    <main className=' w-full max-w-7xl px-3 py-8 mx-auto md:px-11 md:py-5'>
      {children}
    </main>
  );
};

export default Layout;
