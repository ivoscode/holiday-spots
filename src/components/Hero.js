import React from 'react';
import SearchBox from './SearchBox';

const Hero = (props) => {
  return (
    <div className='hero'>
      <SearchBox history={props.history} />
    </div>
  );
};

export default Hero;

/* style={{
        backgroundImage: `url(${background})`,
      }}*/
