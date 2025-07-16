import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoutOutlined, UserOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu, Drawer, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';
import logoImg from '../../assets/conheovang.jpg';
import vietnamFlag from '../../assets/vietnam.jpg';
import koreaFlag from '../../assets/hanquoc.png';
import usFlag from '../../assets/us.png';

const HeaderHomepage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

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
    setMobileMenuOpen(false);
    navigate('/homepage');
  };

  const handleMenuClick = (e: any) => {
    if (e.key === 'profile') {
      navigate('/homepage');
      setMobileMenuOpen(false);
    } else if (e.key === 'logout') {
      handleLogout();
    }
  };

  const userMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='profile' icon={<UserOutlined />}>
        {t('header_profile')}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='logout' icon={<LogoutOutlined />}>
        {t('header_logout')}
      </Menu.Item>
    </Menu>
  );

  const mobileMenuItems = useMemo(() => [
    {
      key: 'home',
      label: t('header_home'),
      onClick: () => {
        navigate('/homepage');
        setMobileMenuOpen(false);
      },
    },
    {
      key: 'menu',
      label: t('header_menu'),
      onClick: () => {
        navigate('/menu');
        setMobileMenuOpen(false);
      },
    },
    {
      key: 'about',
      label: t('header_about'),
      onClick: () => {
        navigate('/about');
        setMobileMenuOpen(false);
      },
    },
    {
      key: 'booking',
      label: t('header_booking'),
      onClick: () => {
        navigate('/booking');
        setMobileMenuOpen(false);
      },
    },
    {
      key: 'contact',
      label: t('header_contact'),
      onClick: () => {
        navigate('/contact');
        setMobileMenuOpen(false);
      },
    },
  ], [t, lang, navigate]);

  const handleChangeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header className='fixed top-0 right-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-white px-2 shadow-sm transition-all duration-300 md:h-20 md:px-8'>
        {/* Logo */}
        <div className='flex items-center max-w-[120px] md:max-w-none pl-1 md:pl-0'>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden flex-1 px-4 md:px-8 md:block'>
          <Navigation />
        </div>

        {/* Desktop User Menu */}
        <div className='hidden items-center gap-4 md:flex'>
          <Dropdown overlay={userMenu} trigger={['click']}>
            <div className='flex cursor-pointer items-center gap-2'>
              <Avatar icon={<UserOutlined />} />
              <span className='text-sm font-medium text-gray-700'>
                {isLoggedIn ? userName : t('header_login')}
              </span>
            </div>
          </Dropdown>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex items-center gap-2 md:hidden'>
          <Dropdown overlay={userMenu} trigger={['click']}>
            <div className='flex cursor-pointer items-center gap-1'>
              <Avatar size='small' icon={<UserOutlined />} />
              <span className='hidden text-xs font-medium text-gray-700 sm:block'>
                {isLoggedIn ? userName : t('header_login')}
              </span>
            </div>
          </Dropdown>
          <Button
            type='text'
            icon={mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='ml-2 flex h-8 w-8 items-center justify-center border-none p-0 text-gray-700 hover:bg-gray-100'
          />
        </div>

        {/* Language Toggle Button */}
        <div className='hidden md:flex items-center gap-2 pr-2 md:pr-0'>
          <button
            onClick={() => handleChangeLang('vi')}
            className={`flex items-center justify-center rounded-full p-1 text-xl transition-all duration-150 ${lang === 'vi' ? 'border-2 border-orange-500 bg-orange-50 scale-110' : 'border border-gray-200 bg-white opacity-70 hover:opacity-100'}`}
            title='Chuyển sang Tiếng Việt'
          >
            <img src={vietnamFlag} alt='Vietnam' className='w-5 h-5 md:w-6 md:h-6 object-cover rounded-full' />
          </button>
          <button
            onClick={() => handleChangeLang('ko')}
            className={`flex items-center justify-center rounded-full p-1 text-xl transition-all duration-150 ${lang === 'ko' ? 'border-2 border-orange-500 bg-orange-50 scale-110' : 'border border-gray-200 bg-white opacity-70 hover:opacity-100'}`}
            title='한국어로 변경'
          >
            <img src={koreaFlag} alt='Korea' className='w-5 h-5 md:w-6 md:h-6 object-cover rounded-full' />
          </button>
          <button
            onClick={() => handleChangeLang('en')}
            className={`flex items-center justify-center rounded-full p-1 text-xl transition-all duration-150 ${lang === 'en' ? 'border-2 border-orange-500 bg-orange-50 scale-110' : 'border border-gray-200 bg-white opacity-70 hover:opacity-100'}`}
            title='Switch to English'
          >
            <img src={usFlag} alt='English' className='w-5 h-5 md:w-6 md:h-6 object-cover rounded-full' />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <Drawer
        title={
          <div className='flex items-center gap-3'>
            <div className='circular-logo flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-orange-200 bg-white shadow-sm sm:h-10 sm:w-10'>
              <img
                src={logoImg}
                alt='Con Heo Vàng Logo'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <span className='text-lg font-semibold text-gray-800'>{t('header_menu_title')}</span>
          </div>
        }
        placement='right'
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={280}
        className='md:hidden'
        styles={{
          body: { padding: 0 },
          header: { padding: '16px 24px', borderBottom: '1px solid #f0f0f0' },
        }}
      >
        <div className='flex flex-col'>
          {mobileMenuItems.map((item) => (
            <div
              key={item.key}
              onClick={item.onClick}
              className='flex cursor-pointer items-center border-b border-gray-100 px-6 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-600'
            >
              {item.label}
            </div>
          ))}
          
          {/* User Info in Mobile Menu */}
          <div className='mt-4 border-t border-gray-200 px-6 py-4'>
            <div className='flex items-center gap-3'>
              <Avatar icon={<UserOutlined />} />
              <div className='flex flex-col'>
                <span className='text-sm font-medium text-gray-800'>
                  {isLoggedIn ? userName : t('header_guest')}
                </span>
                <span className='text-xs text-gray-500'>
                  {isLoggedIn ? t('header_logged_in') : t('header_not_logged_in')}
                </span>
              </div>
            </div>
            {isLoggedIn && (
              <Button
                type='text'
                danger
                icon={<LogoutOutlined />}
                onClick={handleLogout}
                className='mt-3 w-full justify-start'
              >
                {t('header_logout')}
              </Button>
            )}
            {/* Language Toggle in Drawer */}
            <div className='flex items-center gap-3 mt-6 justify-center'>
              <button
                onClick={() => handleChangeLang('vi')}
                className={`flex items-center justify-center rounded-full p-1 text-xl transition-all duration-150 ${lang === 'vi' ? 'border-2 border-orange-500 bg-orange-50 scale-110' : 'border border-gray-200 bg-white opacity-70 hover:opacity-100'}`}
                title='Chuyển sang Tiếng Việt'
              >
                <img src={vietnamFlag} alt='Vietnam' className='w-6 h-6 object-cover rounded-full' />
              </button>
              <button
                onClick={() => handleChangeLang('ko')}
                className={`flex items-center justify-center rounded-full p-1 text-xl transition-all duration-150 ${lang === 'ko' ? 'border-2 border-orange-500 bg-orange-50 scale-110' : 'border border-gray-200 bg-white opacity-70 hover:opacity-100'}`}
                title='한국어로 변경'
              >
                <img src={koreaFlag} alt='Korea' className='w-6 h-6 object-cover rounded-full' />
              </button>
              <button
                onClick={() => handleChangeLang('en')}
                className={`flex items-center justify-center rounded-full p-1 text-xl transition-all duration-150 ${lang === 'en' ? 'border-2 border-orange-500 bg-orange-50 scale-110' : 'border border-gray-200 bg-white opacity-70 hover:opacity-100'}`}
                title='Switch to English'
              >
                <img src={usFlag} alt='English' className='w-6 h-6 object-cover rounded-full' />
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default HeaderHomepage;
