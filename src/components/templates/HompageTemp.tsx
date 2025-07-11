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
                  Địa Chỉ
                </h3>
                <p className='text-sm text-gray-600 transition-colors group-hover:text-orange-600 sm:text-base'>
                  183/185 Dương Đình Nghệ, TP Đà Nẵng
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
                  Đặt Bàn
                </h3>
                <p className='text-sm text-gray-600 transition-colors group-hover:text-orange-600 sm:text-base'>
                  0909 123 456
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
                  Giờ Mở Cửa
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
                Món Nổi Bật
              </h2>
              <p className='mx-auto mb-2 max-w-2xl text-sm font-medium text-gray-700 drop-shadow-sm sm:text-base md:mb-4 md:text-lg lg:text-xl'>
                Những món ăn được yêu thích nhất tại{' '}
                <span className='font-semibold text-orange-600'>
                  Con Heo Vàng
                </span>{' '}
                với hương vị đặc trưng Hàn Quốc
              </p>
              <div className='mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500 sm:mt-4 sm:w-24'></div>
            </motion.div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:gap-8'>
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
                  className='group flex w-full flex-col items-center overflow-hidden rounded-xl bg-white shadow-lg sm:rounded-2xl'
                >
                  <div className='relative h-0 w-full overflow-hidden pb-[75%] sm:pb-[70%] md:pb-[140%]'>
                    <img
                      src={menu.src}
                      alt={menu.title}
                      className='absolute inset-0 h-full w-full max-w-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
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
                Câu chuyện của chúng tôi
              </span>
              <h2 className='mb-3 text-2xl leading-tight font-extrabold break-words text-gray-900 sm:mb-4 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl'>
                Hành Trình Mang{' '}
                <span className='text-orange-600'>Hương Vị Nướng</span> Đến Hàn
                Quốc
              </h2>
              <p className='mb-4 text-lg font-bold text-orange-500 sm:text-xl md:text-2xl lg:text-3xl'>
                Kết nối bạn bè
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
              Liên Hệ Đặt Bàn
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='mx-auto mb-4 max-w-2xl text-sm text-gray-600 sm:mb-6 sm:text-base md:mb-8 md:text-lg'
            >
              Đặt bàn trước để đảm bảo có chỗ ngồi tại nhà hàng Con Heo Vàng.
              Chúng tôi luôn sẵn sàng phục vụ bạn!
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
                  <span className='hidden sm:inline'>Gọi Đặt Bàn: </span>0909 123 456
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
        className='bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-6 text-white sm:px-6 sm:py-8 md:py-12'
      >
        <div className='mx-auto max-w-6xl'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className='mb-2 text-lg font-bold text-orange-400 sm:mb-3 md:mb-4 md:text-xl lg:text-2xl'>
                Con Heo Vàng
              </h3>
              <p className='text-xs leading-relaxed text-gray-300 sm:text-sm md:text-base'>
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
              <h4 className='mb-2 text-sm font-bold sm:mb-3 md:mb-4 md:text-base lg:text-lg'>
                Liên Hệ
              </h4>
              <div className='space-y-1 text-xs text-gray-300 sm:space-y-2 sm:text-sm md:space-y-3 md:text-base'>
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
              className='sm:col-span-2 md:col-span-1'
            >
              <h4 className='mb-2 text-sm font-bold sm:mb-3 md:mb-4 md:text-base lg:text-lg'>
                Theo Dõi
              </h4>
              <div className='space-y-1 text-xs text-gray-300 sm:space-y-2 sm:text-sm md:space-y-3 md:text-base'>
                <p>Facebook: Con Heo Vàng</p>
                <p>Instagram: @conheovang</p>
                <p>Zalo: Con Heo Vàng</p>
              </div>
            </motion.div>
          </div>
          <Divider className='my-4 bg-gray-700 sm:my-6 md:my-8' />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className='text-center text-xs text-gray-400 sm:text-sm md:text-base'
          >
            <p>&copy;2025 Con Heo Vàng. Tất cả quyền được bảo lưu.</p>
          </motion.div>
        </div>
      </motion.footer>
    </Layout>
  );
};

export default HompageTemplate;
