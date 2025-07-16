import { FC } from 'react';
import { Divider } from 'antd';
import { motion } from 'framer-motion';
import Logo from '../atoms/Logo';
import bannerImg from '../../assets/banner.png';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='bg-[#0c1e17] px-4 py-8 text-white sm:px-8 md:py-12'
    >
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          {/* Logo & About */}
          <div className='flex flex-col gap-4'>
            <div className='mb-2'>
              <Logo />
            </div>
            <div className='text-xs sm:text-sm md:text-base text-gray-300'>
              <b>{t('footer_brand')}</b>{t('footer_about')}
            </div>
          </div>
          {/* Liên hệ */}
          <div>
            <h4 className='mb-2 text-base font-bold text-white'>{t('footer_contact')}</h4>
            <div className='text-xs sm:text-sm md:text-base text-gray-300 space-y-1'>
              <div>{t('footer_company_type')}</div>
              <div>{t('footer_hotline')}</div>
              <div>{t('footer_address')}</div>
            </div>
          </div>
          {/* Khám phá */}
          <div>
            <h4 className='mb-2 text-base font-bold text-white'>{t('footer_explore')}</h4>
            <ul className='text-xs sm:text-sm md:text-base text-gray-300 space-y-1'>
              <li>{t('footer_about_company')}</li>
              <li>{t('footer_services')}</li>
              <li>{t('footer_courses')}</li>
              <li>{t('footer_news')}</li>
              <li>{t('footer_contact')}</li>
            </ul>
          </div>
          {/* Fanpage */}
          <div>
            <h4 className='mb-2 text-base font-bold text-white'>{t('footer_fanpage')}</h4>
            <div className='rounded-lg overflow-hidden border border-gray-700 bg-white'>
              <img src={bannerImg} alt='Fanpage' className='object-cover w-full h-28 sm:h-32 md:h-36'/>
            </div>
          </div>
        </div>
        <Divider className='my-6 bg-gray-700' />
        <div className='text-center text-xs text-gray-400 sm:text-sm md:text-base'>
          <p>&copy;2025 {t('footer_copyright')}</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 