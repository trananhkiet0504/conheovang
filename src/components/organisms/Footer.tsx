import { FC } from 'react';
import { Divider } from 'antd';
import { motion } from 'framer-motion';
import Logo from '../atoms/Logo';
import bannerImg from '../../assets/banner.png';

const Footer: FC = () => (
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
            <b>숙성금돼지</b>콘헤오방은 베트남 전통의 맛과 현대적인 서비스를 조화롭게 결합하여, 고객에게 늘 새로운 미식 경험을 제공합니다. 깊은 이해와 경험을 바탕으로, 지속 가능한 외식 브랜드로 성장해 나가고 있습니다.
          </div>
        </div>
        {/* Liên hệ */}
        <div>
          <h4 className='mb-2 text-base font-bold text-white'>문의하기</h4>
          <div className='text-xs sm:text-sm md:text-base text-gray-300 space-y-1'>
            <div>유한책임회사</div>
            <div>핫라인: 090 585 92 87</div>
            <div>주소: 183-185 Dương Đình Nghệ, An Hải Bắc, Sơn Trà, TP Đà Nẵng, Việt Nam, Da Nang, Vietnam</div>
          </div>
        </div>
        {/* Khám phá */}
        <div>
          <h4 className='mb-2 text-base font-bold text-white'>탐색</h4>
          <ul className='text-xs sm:text-sm md:text-base text-gray-300 space-y-1'>
            <li>회사 소개</li>
            <li>서비스</li>
            <li>교육 과정</li>
            <li>뉴스</li>
            <li>문의하기</li>
          </ul>
        </div>
        {/* Fanpage */}
        <div>
          <h4 className='mb-2 text-base font-bold text-white'>팬페이지</h4>
          <div className='rounded-lg overflow-hidden border border-gray-700 bg-white'>
            <img src={bannerImg} alt='Fanpage' className='object-cover w-full h-28 sm:h-32 md:h-36'/>
          </div>
        </div>
      </div>
      <Divider className='my-6 bg-gray-700' />
      <div className='text-center text-xs text-gray-400 sm:text-sm md:text-base'>
        <p>&copy;2025 모든 권리 보유.</p>
      </div>
    </div>
  </motion.footer>
);

export default Footer; 