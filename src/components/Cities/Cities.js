import React from 'react';
import City from './City';
import SlickSlider from '../SlickSlider';

function Cities(props) {
  const cities = props.cities.map((city, i) => {
    return (
      <div key={i} className=''>
        <City city={city} key={i} />
      </div>
    );
  });
  return (
    <div className='max-w-5xl mx-auto px-4 lg:px-0'>
      <h1 className='main-header-text'>{props.header}</h1>
      <SlickSlider elements={cities} />
    </div>
  );
}

export default Cities;
