import React from 'react';
import { Menu } from 'antd';

const Navigation: React.FC = () => (
  <Menu
    mode='horizontal'
    className='navigation-menu border-none bg-transparent'
    items={[
      {
        key: 'home',
        label: 'Trang Chủ',
        className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
      },
      {
        key: 'menu',
        label: 'Thực Đơn',
        className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
      },
      {
        key: 'about',
        label: 'Về Chúng Tôi',
        className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
      },
      {
        key: 'booking',
        label: 'Đặt Bàn',
        className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
      },
      {
        key: 'contact',
        label: 'Liên Hệ',
        className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
      },
    ]}
  />
);

export default Navigation;
