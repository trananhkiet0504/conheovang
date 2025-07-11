import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/conheovang.jpg';

const Logo: React.FC = () => (
  <Link to='/' className='flex items-center'>
    <img
      src={logoImg}
      alt='Con Heo Vàng Logo'
      className='h-10 max-h-12 w-auto rounded-md object-contain md:h-12'
      style={{ maxWidth: 120 }}
    />
  </Link>
);

export default Logo;
