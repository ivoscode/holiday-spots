import React from 'react';

const MenuButton = () => {
  return (
    <div>
      <button class='z-50 relative flex lg:hidden items-center font-headers rounded-full border-2 uppercase no-underline px-4 py-2 ml-auto focus:outline-none text-black border-black'>
        <svg version='1.1' viewBox='0 0 16 16' class='svg-icon svg-fill'>
          <path
            fill='#FFF'
            stroke='none'
            pid='0'
            d='M1 3h14v2H1V3zM1 7h14v2H1V7zM1 11h14v2H1v-2z'
          ></path>
        </svg>{' '}
        <span class='ml-2'>Menu</span>
      </button>
    </div>
  );
};

export default MenuButton;
