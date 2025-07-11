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

const { Content } = Layout;
const { Search } = Input;

const HompageTemplate: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const popularDishes = [
    {
      id: 1,
      name: 'Thịt Nướng BBQ',
      description: 'Thịt heo tươi nướng than hoa với sốt đặc biệt',
      price: '150.000đ',
      image: '/images/dish1.jpg',
      rating: 4.8,
      isSpicy: true,
      isNew: true,
      discount: '10%',
    },
    {
      id: 2,
      name: 'Sườn Nướng Mật Ong',
      description: 'Sườn heo nướng mật ong thơm ngọt',
      price: '180.000đ',
      image: '/images/dish2.jpg',
      rating: 4.9,
      isSpicy: false,
      isNew: false,
      discount: null,
    },
    {
      id: 3,
      name: 'Bụng Heo Nướng',
      description: 'Bụng heo nướng giòn với gia vị đặc biệt',
      price: '200.000đ',
      image: '/images/dish3.jpg',
      rating: 4.7,
      isSpicy: true,
      isNew: false,
      discount: '15%',
    },
    {
      id: 4,
      name: 'Chân Giò Nướng',
      description: 'Chân giò nướng mềm với sốt chua ngọt',
      price: '120.000đ',
      image: '/images/dish4.jpg',
      rating: 4.6,
      isSpicy: false,
      isNew: true,
      discount: null,
    },
    {
      id: 5,
      name: 'Gà Nướng Lá Chanh',
      description: 'Gà nướng với lá chanh thơm nức',
      price: '250.000đ',
      image: '/images/dish5.jpg',
      rating: 4.9,
      isSpicy: false,
      isNew: false,
      discount: '20%',
    },
    {
      id: 6,
      name: 'Tôm Nướng Muối Ớt',
      description: 'Tôm tươi nướng muối ớt cay nồng',
      price: '300.000đ',
      image: '/images/dish6.jpg',
      rating: 4.8,
      isSpicy: true,
      isNew: true,
      discount: null,
    },
  ];

  const categories = [
    {
      name: 'Món Nướng',
      icon: '🔥',
      count: 12,
      color: 'from-red-500 to-orange-500',
    },
    { name: 'Lẩu', icon: '🍲', count: 8, color: 'from-blue-500 to-purple-500' },
    {
      name: 'Khai Vị',
      icon: '🥗',
      count: 6,
      color: 'from-green-500 to-teal-500',
    },
    {
      name: 'Đồ Uống',
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
        className='fixed right-6 bottom-6 z-50'
      >
        <Button
          type='primary'
          shape='circle'
          size='large'
          icon={<PhoneOutlined />}
          className='border-orange-500 bg-orange-500 shadow-lg hover:bg-orange-600'
          style={{ width: 60, height: 60 }}
        />
      </motion.div>

      {/* Content */}
      <Content
        style={{ padding: '0 48px', backgroundColor: 'white' }}
        className='mt-20 flex-1'
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
          className='relative overflow-hidden bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 py-16'
        >
          {/* Background Pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-10 left-10 h-20 w-20 rounded-full bg-orange-300'></div>
            <div className='absolute top-32 right-20 h-16 w-16 rounded-full bg-yellow-300'></div>
            <div className='absolute bottom-20 left-1/4 h-12 w-12 rounded-full bg-orange-200'></div>
          </div>

          <div className='relative z-10 mx-auto max-w-6xl'>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='grid grid-cols-1 gap-8 md:grid-cols-3'
            >
              <motion.div variants={itemVariants} className='group text-center'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className='mb-4 inline-block rounded-full bg-white p-4 shadow-lg'
                >
                  <EnvironmentOutlined className='text-4xl text-orange-500' />
                </motion.div>
                <h3 className='mb-3 text-xl font-bold text-gray-800'>
                  Địa Chỉ
                </h3>
                <p className='text-gray-600 transition-colors group-hover:text-orange-600'>
                  183/185 Dương Đình Nghệ, TP Đà Nẵng
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className='group text-center'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className='mb-4 inline-block rounded-full bg-white p-4 shadow-lg'
                >
                  <PhoneOutlined className='text-4xl text-orange-500' />
                </motion.div>
                <h3 className='mb-3 text-xl font-bold text-gray-800'>
                  Đặt Bàn
                </h3>
                <p className='text-gray-600 transition-colors group-hover:text-orange-600'>
                  0909 123 456
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className='group text-center'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className='mb-4 inline-block rounded-full bg-white p-4 shadow-lg'
                >
                  <ClockCircleOutlined className='text-4xl text-orange-500' />
                </motion.div>
                <h3 className='mb-3 text-xl font-bold text-gray-800'>
                  Giờ Mở Cửa
                </h3>
                <p className='text-gray-600 transition-colors group-hover:text-orange-600'>
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
          className='bg-gradient-to-br from-gray-50 to-orange-50 px-2 py-12 sm:px-4 md:py-16'
        >
          <div className='mx-auto max-w-6xl'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className='mb-8 text-center md:mb-12'
            >
              <h2 className='mb-3 text-3xl font-extrabold tracking-tight text-orange-600 drop-shadow-lg md:mb-4 md:text-5xl'>
                Món Nổi Bật
              </h2>
              <p className='mx-auto mb-2 max-w-2xl text-base font-medium text-gray-700 drop-shadow-sm md:text-xl'>
                Những món ăn được yêu thích nhất tại{' '}
                <span className='font-semibold text-orange-600'>
                  Con Heo Vàng
                </span>{' '}
                với hương vị đặc trưng Hàn Quốc
              </p>
              <div className='mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500'></div>
            </motion.div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'>
              {[
                { src: beefMenu, title: 'Beef Menu' },
                { src: beef2Menu, title: 'Beef Cuts' },
                { src: goldenSetMenu, title: 'Golden Set' },
                { src: porkMenu, title: 'Pork Menu' },
                { src: mealMenu, title: 'Meal Menu' },
                { src: drinkMenu, title: 'Drink Menu' },
              ].map((menu, idx) => (
                <motion.div
                  key={menu.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className='group flex w-full flex-col items-center overflow-hidden rounded-2xl bg-white shadow-lg'
                >
                  <div className='relative h-0 max-h-[400px] w-full overflow-hidden pb-[70vw] md:pb-[140%]'>
                    <img
                      src={menu.src}
                      alt={menu.title}
                      className='absolute inset-0 h-full w-full max-w-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
                    />
                  </div>
                  <div className='w-full py-3 text-center md:py-4'>
                    <span className='text-base font-semibold text-gray-800 md:text-lg'>
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
          className='bg-white px-2 py-12 sm:px-4 md:py-20'
        >
          <div className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2'>
            {/* Left: Text Content */}
            <div className='flex h-full w-full flex-col items-start justify-center text-center lg:text-left'>
              <span className='mb-4 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600'>
                Câu chuyện của chúng tôi
              </span>
              <h2 className='mb-4 text-3xl leading-tight font-extrabold break-words text-gray-900 md:mb-6 md:text-5xl'>
                Hành Trình Mang{' '}
                <span className='text-orange-600'>Hương Vị Nướng</span> Đến Hàn
                Quốc
              </h2>
              <p className='mb-4 text-xl font-bold text-orange-500 md:text-3xl'>
                Kết nối bạn bè
              </p>
            </div>
            {/* Right: Image */}
            <div className='relative flex min-h-[220px] w-full items-center justify-center md:min-h-[340px]'>
              <div className='absolute top-0 right-0 h-20 w-20 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 opacity-60 md:h-32 md:w-32'></div>
              <div className='absolute bottom-0 left-0 h-16 w-16 rounded-full bg-gradient-to-br from-orange-300 to-pink-200 opacity-60 md:h-24 md:w-24'></div>
              <div className='relative z-10 flex h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gray-100 shadow-lg md:h-[340px]'>
                <img
                  src={ketNoiBB}
                  alt='Kết nối bạn bè'
                  className='h-full w-full max-w-full rounded-2xl object-cover'
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
          className='bg-gradient-to-br from-gray-50 to-orange-50 px-2 py-12 sm:px-4 md:py-16'
        >
          <div className='mx-auto max-w-4xl text-center'>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='mb-4 text-3xl font-bold text-gray-800 md:mb-6 md:text-4xl'
            >
              Liên Hệ Đặt Bàn
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='mx-auto mb-6 max-w-2xl text-base text-gray-600 md:mb-8 md:text-lg'
            >
              Đặt bàn trước để đảm bảo có chỗ ngồi tại nhà hàng Con Heo Vàng.
              Chúng tôi luôn sẵn sàng phục vụ bạn!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='flex flex-col justify-center gap-3 sm:flex-row md:gap-4'
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type='primary'
                  size='large'
                  icon={<PhoneOutlined />}
                  className='h-11 w-full border-orange-500 bg-orange-500 px-6 text-base font-medium hover:bg-orange-600 sm:w-auto md:h-12 md:px-8'
                >
                  Gọi Đặt Bàn: 0909 123 456
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='large'
                  className='h-11 w-full border-orange-500 px-6 text-base font-medium text-orange-500 hover:bg-orange-50 sm:w-auto md:h-12 md:px-8'
                >
                  Xem Bản Đồ
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </Content>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='bg-gradient-to-r from-gray-800 to-gray-900 px-2 py-8 text-white sm:px-4 md:py-12'
      >
        <div className='mx-auto max-w-6xl px-2 sm:px-8'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className='mb-3 text-xl font-bold text-orange-400 md:mb-4 md:text-2xl'>
                Con Heo Vàng
              </h3>
              <p className='text-sm leading-relaxed text-gray-300 md:text-base'>
                Nhà hàng nướng với hương vị Hàn Quốc đích thực. Chất lượng tươi
                ngon, phục vụ chu đáo.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className='mb-3 text-base font-bold md:mb-4 md:text-lg'>
                Liên Hệ
              </h4>
              <div className='space-y-2 text-sm text-gray-300 md:space-y-3 md:text-base'>
                <p className='flex items-center gap-2'>📞 0909 123 456</p>
                <p className='flex items-center gap-2'>
                  📍 183/185 Dương Đình Nghệ, TP Đà Nẵng
                </p>
                <p className='flex items-center gap-2'>🕒 16:00 - 23:00</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className='mb-3 text-base font-bold md:mb-4 md:text-lg'>
                Theo Dõi
              </h4>
              <div className='space-y-2 text-sm text-gray-300 md:space-y-3 md:text-base'>
                <p>Facebook: Con Heo Vàng</p>
                <p>Instagram: @conheovang</p>
                <p>Zalo: Con Heo Vàng</p>
              </div>
            </motion.div>
          </div>
          <Divider className='my-6 bg-gray-700 md:my-8' />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className='text-center text-xs text-gray-400 md:text-base'
          >
            <p>&copy;2025 Con Heo Vàng. Tất cả quyền được bảo lưu.</p>
          </motion.div>
        </div>
      </motion.footer>
    </Layout>
  );
};

export default HompageTemplate;
