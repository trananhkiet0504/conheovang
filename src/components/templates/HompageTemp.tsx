import { FC, useEffect, useState } from 'react';
import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  FireOutlined,
  HeartOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Badge, Button, Card, Divider, Input, Layout, Rate } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';

import beefMenu from '../../assets/Beef.jpg';
import beef2Menu from '../../assets/Beef2.jpg';
import drinkMenu from '../../assets/Drink.jpg';
import goldenSetMenu from '../../assets/GoldenSet.jpg';
import ketNoiBB from '../../assets/ketnoibb.jpg';
import mealMenu from '../../assets/Meal.jpg';
import porkMenu from '../../assets/Pork.jpg';
import Banner from '../organisms/Banner';
import HeaderHomepage from '../organisms/HeaderHomepage';
import Footer from '../organisms/Footer';

const { Content } = Layout;
const { Search } = Input;

const HompageTemplate: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Set initial mobile state
    setIsMobile(window.innerWidth < 768);
    setIsVisible(true);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const popularDishes = [
    {
      id: 1,
      name: 'BBQ 삼겹살',
      description: '특제 소스로 숯불에 구운 신선한 돼지고기',
      price: '150,000₫',
      image: '/images/dish1.jpg',
      rating: 4.8,
      isSpicy: true,
      isNew: true,
      discount: '10%',
    },
    {
      id: 2,
      name: '꿀 양념 갈비',
      description: '달콤한 꿀 양념으로 구운 돼지갈비',
      price: '180,000₫',
      image: '/images/dish2.jpg',
      rating: 4.9,
      isSpicy: false,
      isNew: false,
      discount: null,
    },
    {
      id: 3,
      name: '삼겹살 구이',
      description: '특제 양념으로 바삭하게 구운 삼겹살',
      price: '200,000₫',
      image: '/images/dish3.jpg',
      rating: 4.7,
      isSpicy: true,
      isNew: false,
      discount: '15%',
    },
    {
      id: 4,
      name: '족발 구이',
      description: '새콤달콤 소스로 부드럽게 구운 족발',
      price: '120,000₫',
      image: '/images/dish4.jpg',
      rating: 4.6,
      isSpicy: false,
      isNew: true,
      discount: null,
    },
    {
      id: 5,
      name: '레몬잎 닭구이',
      description: '향긋한 레몬잎과 함께 구운 닭고기',
      price: '250,000₫',
      image: '/images/dish5.jpg',
      rating: 4.9,
      isSpicy: false,
      isNew: false,
      discount: '20%',
    },
    {
      id: 6,
      name: '매운 소금구이 새우',
      description: '매콤한 소금 양념으로 구운 신선한 새우',
      price: '300,000₫',
      image: '/images/dish6.jpg',
      rating: 4.8,
      isSpicy: true,
      isNew: true,
      discount: null,
    },
  ];

  const categories = [
    {
      name: '구이',
      icon: '🔥',
      count: 12,
      color: 'from-red-500 to-orange-500',
    },
    { name: '전골', icon: '🍲', count: 8, color: 'from-blue-500 to-purple-500' },
    {
      name: '에피타이저',
      icon: '🥗',
      count: 6,
      color: 'from-green-500 to-teal-500',
    },
    {
      name: '음료',
      icon: '🥤',
      count: 10,
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Layout className='flex min-h-screen flex-col'>
      <HeaderHomepage />

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className='fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6'
      >
        <Button
          type='primary'
          shape='circle'
          size='large'
          icon={<PhoneOutlined />}
          className='floating-action-button border-orange-500 bg-orange-500 shadow-lg hover:bg-orange-600'
          style={{ 
            width: 'clamp(48px, 12vw, 60px)', 
            height: 'clamp(48px, 12vw, 60px)',
            minWidth: '48px',
            minHeight: '48px'
          }}
        />
      </motion.div>

      {/* Content */}
      <Content
        style={{ padding: '0 16px', backgroundColor: 'white' }}
        className='mt-16 flex-1 sm:mt-20 md:px-12'
      >
        <div className='border-b border-gray-300'>
          <Banner />
        </div>

        {/* Restaurant Info Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='relative overflow-hidden bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 py-8 sm:py-12 md:py-16'
        >
          {/* Background Pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-10 left-10 h-20 w-20 rounded-full bg-orange-300'></div>
            <div className='absolute top-32 right-20 h-16 w-16 rounded-full bg-yellow-300'></div>
            <div className='absolute bottom-20 left-1/4 h-12 w-12 rounded-full bg-orange-200'></div>
          </div>

          <div className='relative z-10 mx-auto max-w-6xl px-4'>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8'
            >
              <motion.div variants={itemVariants} className='group text-center'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className='mb-3 inline-block rounded-full bg-white p-3 shadow-lg sm:mb-4 sm:p-4'
                >
                  <EnvironmentOutlined className='text-2xl text-orange-500 sm:text-3xl md:text-4xl' />
                </motion.div>
                <h3 className='mb-2 text-lg font-bold text-gray-800 sm:mb-3 sm:text-xl'>
                  주소
                </h3>
                <p className='text-sm text-gray-600 transition-colors group-hover:text-orange-600 sm:text-base'>
                  183/185 Duong Dinh Nghe, Da Nang
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className='group text-center'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className='mb-3 inline-block rounded-full bg-white p-3 shadow-lg sm:mb-4 sm:p-4'
                >
                  <PhoneOutlined className='text-2xl text-orange-500 sm:text-3xl md:text-4xl' />
                </motion.div>
                <h3 className='mb-2 text-lg font-bold text-gray-800 sm:mb-3 sm:text-xl'>
                  예약 문의
                </h3>
                <p className='text-sm text-gray-600 transition-colors group-hover:text-orange-600 sm:text-base'>
                090 585 92 87
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className='group text-center sm:col-span-2 md:col-span-1'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className='mb-3 inline-block rounded-full bg-white p-3 shadow-lg sm:mb-4 sm:p-4'
                >
                  <ClockCircleOutlined className='text-2xl text-orange-500 sm:text-3xl md:text-4xl' />
                </motion.div>
                <h3 className='mb-2 text-lg font-bold text-gray-800 sm:mb-3 sm:text-xl'>
                  영업 시간
                </h3>
                <p className='text-sm text-gray-600 transition-colors group-hover:text-orange-600 sm:text-base'>
                  10:00 - 22:00
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Popular Dishes Section as Menu Images */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-gradient-to-br from-gray-50 to-orange-50 px-4 py-8 sm:px-6 sm:py-12 md:py-16'
        >
          <div className='mx-auto max-w-6xl'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className='mb-6 text-center sm:mb-8 md:mb-12'
            >
              <h2 className='mb-2 text-2xl font-extrabold tracking-tight text-orange-600 drop-shadow-lg sm:mb-3 sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl'>
                인기 메뉴
              </h2>
              <p className='mx-auto mb-2 max-w-2xl text-sm font-medium text-gray-700 drop-shadow-sm sm:text-base md:mb-4 md:text-lg lg:text-xl'>
                <span className='font-semibold text-orange-600'>황금돼지</span>에서 가장 인기 있는 한국식 요리
              </p>
              <div className='mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500 sm:mt-4 sm:w-24'></div>
            </motion.div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:gap-8'>
              {[
                { src: beefMenu, title: '소고기 메뉴' },
                { src: beef2Menu, title: '소고기 커트' },
                { src: goldenSetMenu, title: '골든 세트' },
                { src: porkMenu, title: '돼지고기 메뉴' },
                { src: mealMenu, title: '식사 메뉴' },
                { src: drinkMenu, title: '음료 메뉴' },
              ].map((menu, idx) => (
                <motion.div
                  key={menu.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className='group flex w-full flex-col items-center overflow-hidden rounded-xl bg-white shadow-lg sm:rounded-2xl'
                >
                  <div className='relative h-40 w-full overflow-hidden rounded-xl bg-white sm:h-0 sm:pb-[70%] md:pb-[140%]'>
                    <img
                      src={menu.src}
                      alt={menu.title}
                      className='absolute inset-0 h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105 bg-white sm:object-cover'
                    />
                  </div>
                  <div className='w-full py-2 text-center sm:py-3 md:py-4'>
                    <span className='text-sm font-semibold text-gray-800 sm:text-base md:text-lg'>
                      {menu.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About Section - Modern Story Style */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-white px-4 py-8 sm:px-6 sm:py-12 md:py-20'
        >
          <div className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2'>
            {/* Left: Text Content */}
            <div className='flex h-full w-full flex-col items-start justify-center text-center lg:text-left'>
              <span className='mb-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600 sm:mb-4 sm:px-4 sm:text-sm'>
                저희 이야기
              </span>
              <h2 className='mb-3 text-2xl leading-tight font-extrabold break-words text-gray-900 sm:mb-4 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl'>
                <span className='text-orange-600'>한국식 바비큐</span>의 맛을 전하는 여정
              </h2>
              <p className='mb-4 text-lg font-bold text-orange-500 sm:text-xl md:text-2xl lg:text-3xl'>
                친구와의 만남
              </p>
            </div>
            {/* Right: Image */}
            <div className='relative flex min-h-[200px] w-full items-center justify-center sm:min-h-[250px] md:min-h-[300px] lg:min-h-[340px]'>
              <div className='absolute top-0 right-0 h-16 w-16 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 opacity-60 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32'></div>
              <div className='absolute bottom-0 left-0 h-12 w-12 rounded-full bg-gradient-to-br from-orange-300 to-pink-200 opacity-60 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-24 lg:w-24'></div>
              <div className='relative z-10 flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl bg-gray-100 shadow-lg sm:h-[250px] md:h-[300px] lg:h-[340px] lg:rounded-2xl'>
                <img
                  src={ketNoiBB}
                  alt='Kết nối bạn bè'
                  className='h-full w-full max-w-full rounded-xl object-cover lg:rounded-2xl'
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-gradient-to-br from-gray-50 to-orange-50 px-4 py-8 sm:px-6 sm:py-12 md:py-16'
        >
          <div className='mx-auto max-w-4xl text-center'>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='mb-3 text-2xl font-bold text-gray-800 sm:mb-4 md:mb-6 md:text-3xl lg:text-4xl'
            >
              예약 문의
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='mx-auto mb-4 max-w-2xl text-sm text-gray-600 sm:mb-6 sm:text-base md:mb-8 md:text-lg'
            >
              콘헤오방에서 자리를 미리 예약하세요. 언제나 정성껏 모시겠습니다!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='flex flex-col justify-center gap-3 sm:flex-row sm:gap-4'
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type='primary'
                  size='large'
                  icon={<PhoneOutlined />}
                  className='h-10 w-full border-orange-500 bg-orange-500 px-4 text-sm font-medium hover:bg-orange-600 sm:h-11 sm:px-6 sm:text-base md:h-12 md:px-8'
                >
                  <span className='hidden sm:inline'>전화 예약: </span>: 090 585 92 87
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='large'
                  className='h-10 w-full border-orange-500 px-4 text-sm font-medium text-orange-500 hover:bg-orange-50 sm:h-11 sm:px-6 sm:text-base md:h-12 md:px-8'
                >
                  지도 보기
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </Content>

      {/* Footer */}
      <Footer />
    </Layout>
  );
};

export default HompageTemplate;
