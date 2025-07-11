import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/conheovang.jpg';

const Logo: React.FC = () => (
  <Link to='/' className='flex items-center'>
    <div className='circular-logo flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-orange-200 bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md sm:h-10 sm:w-10 md:h-12 md:w-12'>
      <img
        src={logoImg}
        alt='Con Heo Vàng Logo'
        className='h-full w-full object-cover object-center'
      />
    </div>
  </Link>
);

export default Logo;
