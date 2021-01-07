import React from 'react';

const Form = () => {
  return (
    <form
      action='#'
      class=' w-9/12 absolute inset-x-0 top-32 mx-auto  lg:pl-40'
    >
      <div class='flex items-start justify-start flex-wrap'>
        <div class='lg:w-1/3 w-full lg:pr-2 mb-4 lg:mb-0'>
          <label for='where' class='label'>
            Where
          </label>
          <input type='text' class='input' id='where' placeholder='Anywhere' />
        </div>
        <div class='lg:w-1/3 w-full lg:px-2 mb-4 lg:mb-0'>
          <label for='checkin_checkout' class='label'>
            Check-in - Checkout
          </label>
          <input
            type='text'
            class='input'
            id='checkin_checkout'
            placeholder='mm/dd/yyyy - mm/dd/yyyy'
          />
        </div>
        <div class='lg:w-1/3 w-full lg:pl-2'>
          <label for='guests' class='label'>
            Guests
          </label>
          <div class='relative'>
            <select id='guests' class='input select'>
              <option value='1' selected>
                1 guest
              </option>
              <option value='2' selected>
                2 guests
              </option>
              <option value='3' selected>
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
      </div>
    </form>
  );
};

export default Form;
