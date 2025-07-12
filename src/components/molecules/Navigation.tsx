import React from 'react';
import { Menu } from 'antd';

const Navigation: React.FC = () => (
  <Menu
    mode='horizontal'
    className='navigation-menu border-none bg-transparent'
    items={[
      {
        key: 'home',
        label: '홈',
        className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
      },
      {
        key: 'menu',
        label: '메뉴',
        className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
      },
      {
        key: 'about',
        label: '회사 소개',
        className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
      },
      {
        key: 'booking',
        label: '예약',
        className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
      },
      {
        key: 'contact',
        label: '문의하기',
        className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
      },
    ]}
  />
);

export default Navigation;
