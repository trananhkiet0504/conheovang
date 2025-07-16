import { FC, useEffect, useState } from 'react';
import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import {Button, Layout } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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
import PhoneCallTemp from './PhoneCallTemp';

const { Content } = Layout;


const HompageTemplate: FC = () => {
  const { t } = useTranslation();
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

  return (
    <Layout className='flex min-h-screen flex-col'>
      <HeaderHomepage />

      {/* Floating Action Button */}
      <PhoneCallTemp />

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
                  {t('address_title')}
                </h3>
                <p className='text-sm text-gray-600 transition-colors group-hover:text-orange-600 sm:text-base'>
                  {t('address_detail')}
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
                  {t('booking_inquiry')}
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
                  {t('open_time_title')}
                </h3>
                <p className='text-sm text-gray-600 transition-colors group-hover:text-orange-600 sm:text-base'>
                  {t('open_time')}
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
                {t('popular_menu')}
              </h2>
              <p className='mx-auto mb-2 max-w-2xl text-sm font-medium text-gray-700 drop-shadow-sm sm:text-base md:mb-4 md:text-lg lg:text-xl'>
                <span className='font-semibold text-orange-600'>{t('golden_pig')}</span>{t('most_popular_korean_dishes')}
              </p>
              <div className='mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500 sm:mt-4 sm:w-24'></div>
            </motion.div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:gap-8'>
              {[
                { src: beefMenu, title: t('beef_menu') },
                { src: beef2Menu, title: t('beef_cut') },
                { src: goldenSetMenu, title: t('golden_set') },
                { src: porkMenu, title: t('pork_menu') },
                { src: mealMenu, title: t('meal_menu') },
                { src: drinkMenu, title: t('drink_menu') },
              ].map((menu, idx) => (
                <motion.div
                  key={menu.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className='group flex w-full flex-col items-center overflow-hidden rounded-xl bg-white shadow-lg sm:rounded-2xl'
                >
                  <div className='relative aspect-[4/6] w-full overflow-hidden rounded-xl bg-white sm:h-0 sm:pb-[70%] md:pb-[140%]'>
                    <img
                      src={menu.src}
                      alt={menu.title}
                      className='absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 bg-white'
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
                {t('our_story')}
              </span>
              <h2 className='mb-3 text-2xl leading-tight font-extrabold break-words text-gray-900 sm:mb-4 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl'>
                <span className='text-orange-600'>{t('korean_bbq')}</span>{t('journey_to_deliver_flavor')}
              </h2>
              <p className='mb-4 text-lg font-bold text-orange-500 sm:text-xl md:text-2xl lg:text-3xl'>
                {t('about_story')}
              </p>
            </div>
            {/* Right: Image */}
            <div className='relative flex min-h-[200px] w-full items-center justify-center sm:min-h-[250px] md:min-h-[300px] lg:min-h-[340px]'>
              <div className='absolute top-0 right-0 h-16 w-16 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 opacity-60 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32'></div>
              <div className='absolute bottom-0 left-0 h-12 w-12 rounded-full bg-gradient-to-br from-orange-300 to-pink-200 opacity-60 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-24 lg:w-24'></div>
              <div className='relative z-10 flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl bg-gray-100 shadow-lg sm:h-[250px] md:h-[300px] lg:h-[340px] lg:rounded-2xl'>
                <img
                  src={ketNoiBB}
                  alt={t('connect_friends')}
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
              {t('booking_inquiry')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='mx-auto mb-4 max-w-2xl text-sm text-gray-600 sm:mb-6 sm:text-base md:mb-8 md:text-lg'
            >
              {t('booking_note')}
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
                  <span className='hidden sm:inline'>{t('call_booking')}: </span>: 090 585 92 87
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
                  {t('view_location')}
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
