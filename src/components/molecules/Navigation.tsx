import React from 'react';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClick = (e: any) => {
    if (e.key === 'home') navigate('/homepage');
    else if (e.key === 'menu') navigate('/menu');
    else if (e.key === 'about') navigate('/about');
    else if (e.key === 'booking') navigate('/booking');
    else if (e.key === 'contact') navigate('/contact');
  };
  return (
    <Menu
      mode='horizontal'
      className='navigation-menu border-none bg-transparent'
      onClick={handleClick}
      items={[
        {
          key: 'home',
          label: t('header_home'),
          className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
        },
        {
          key: 'menu',
          label: t('header_menu'),
          className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
        },
        {
          key: 'about',
          label: t('header_about'),
          className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
        },
        {
          key: 'booking',
          label: t('header_booking'),
          className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
        },
        {
          key: 'contact',
          label: t('header_contact'),
          className: 'text-gray-700 hover:text-orange-500 font-medium text-sm lg:text-base',
        },
      ]}
    />
  );
};

export default Navigation;
