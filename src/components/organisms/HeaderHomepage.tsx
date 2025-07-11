import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';

import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';

const HeaderHomepage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const checkUserLogin = () => {
      const storedUser =
        localStorage.getItem('user') || sessionStorage.getItem('user');
      const token =
        localStorage.getItem('token') || sessionStorage.getItem('token');

      if (storedUser && token) {
        try {
          const user = JSON.parse(storedUser);
          if (user && user.fullName) {
            setUserName(user.fullName);
            setIsLoggedIn(true);
          } else {
            console.warn('User data missing fullName');
            setIsLoggedIn(false);
            setUserName('');
          }
        } catch (error) {
          console.error('Failed to parse user info:', error);
          setIsLoggedIn(false);
          setUserName('');
        }
      } else {
        setIsLoggedIn(false);
        setUserName('');
      }
    };

    checkUserLogin();
    window.addEventListener('storage', checkUserLogin);
    return () => window.removeEventListener('storage', checkUserLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/homepage');
  };

  const handleMenuClick = (e: any) => {
    if (e.key === 'profile') {
      navigate('/homepage');
    } else if (e.key === 'logout') {
      handleLogout();
    }
  };

  const userMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='profile' icon={<UserOutlined />}>
        Thông Tin Cá Nhân
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='logout' icon={<LogoutOutlined />}>
        Đăng Xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <header className='fixed top-0 right-0 left-0 z-50 flex h-20 w-full items-center justify-between bg-white px-8 shadow-sm transition-all duration-300'>
      <div className='flex items-center'>
        <Logo />
      </div>
      <div className='flex-1 px-8'>
        <Navigation />
      </div>
      <div className='flex items-center gap-4'>
        <Dropdown overlay={userMenu} trigger={['click']}>
          <div className='flex cursor-pointer items-center gap-2'>
            <Avatar icon={<UserOutlined />} />
            <span className='text-sm font-medium text-gray-700'>
              {isLoggedIn ? userName : 'Đăng Nhập'}
            </span>
          </div>
        </Dropdown>
      </div>
    </header>
  );
};

export default HeaderHomepage;
