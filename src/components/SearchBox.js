import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useControlledInput from '../Hooks/useControlledInput';

const SearchBox = (props) => {
  const where = useControlledInput('');
  const checkIn = useControlledInput('');
  const checkOut = useControlledInput('');
  const guests = useControlledInput(1);

  const history = useHistory();
  const submitSearch = (e) => {
    e.preventDefault();
    if (!where.value) {
      return;
    }
    history.push(`/search/${where.value}`);
  };
  console.log(where);
  console.log(guests.value);
  return (
    <form
      onSubmit={submitSearch}
      action='#'
      class=' w-9/12 absolute inset-x-0 top-24 bg-white p-4 rounded-xl lg:bg-transparent mx-auto  lg:pl-40'
    >
      <div class='flex items-end justify-start flex-wrap'>
        <div class='lg:w-1/4 w-full lg:pr-2 mb-4 lg:mb-0'>
          <label for='where' class='label'>
            Where
          </label>
          <input
            type='text'
            {...where}
            class='input'
            id='where'
            placeholder='Anywhere'
          />
        </div>
        <div class='lg:w-1/3 w-full lg:px-2 mb-4 lg:mb-0'>
          <div className='w-1/2 inline-block'>
            <label for='checkin_checkout' class='label'>
              Check-in
            </label>
            <input
              {...checkIn}
              type='text'
              class='input'
              id='checkin_checkout'
              placeholder='mm/dd/yyyy'
            />
          </div>

          <div className='w-1/2 inline-block'>
            <label for='checkin_checkout' class='label'>
              Checkout
            </label>
            <input
              {...checkOut}
              type='text'
              class='input'
              id='checkin_checkout'
              placeholder=' mm/dd/yyyy'
            />
          </div>
        </div>
        <div class='lg:w-1/5 w-full lg:pl-2'>
          <label for='guests' class='label'>
            Guests
          </label>
          <div class='relative'>
            <select id='guests' class='input select'>
              <option {...guests} selected>
                1 guest
              </option>
              <option {...guests} selected>
                2 guests
              </option>
              <option {...guests} selected>
                3 guests
              </option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                class='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='lg:w-1/5 w-full mt-3 lg:pr-2 mb-4 lg:mb-0 flex justify-center'>
          <button
            type='submit'
            class=' bg-blue-400 hover:bg-blue-600  text-white font-bold w-1/3 py-1 lg:py-3    rounded'
          >
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
              class='w-6 h-6 mx-auto '
            >
              <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
