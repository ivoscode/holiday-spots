import React, { Component } from 'react';

class City extends Component {
  render() {
    // console.log(this.props.city);
    const { cityName, image, price, id } = this.props.city;
    return (
      <div className='m-2'>
        <div className='image'>
          <img src={image} alt='cityimage' />
        </div>
        <div className='city-name'>{cityName}</div>
        <div className='price'>${price}/night average</div>
      </div>
    );
  }
}

export default City;
