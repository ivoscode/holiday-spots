import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header className='bg-transparent absolute inset-x-0 top-0 '>
      <div className='flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8'>
        <Link to='/'>
          <h1 className='flex items-center text-white no-underline'>
            <span className='text-xl font-bold tracking-tight'>
              <div>TravelFun</div>
            </span>
          </h1>
        </Link>

        <button
          className='items-center block px-3 py-2 text-white border border-white rounded md:hidden'
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className='w-3 h-3 fill-current'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Places to Stay`,
            },
            {
              route: `/`,
              title: `Become a Host`,
            },
          ].map((link) => (
            <Link
              className='block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6'
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
