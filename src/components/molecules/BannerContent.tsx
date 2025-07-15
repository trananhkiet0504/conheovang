import React from 'react';
import { Button } from 'antd';
import { PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const BannerContent = () => (
  <div className='w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center text-white py-8 sm:py-12 md:py-20'>
    <h1 className='mb-4 text-2xl font-bold break-words sm:text-4xl md:text-5xl lg:text-6xl'>
      황금돼지 바비큐
    </h1>
    <p className='mb-6 text-base font-medium sm:text-xl md:text-2xl'>
      베트남 최고의 한국식 바비큐 레스토랑
    </p>
    <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4'>
      <Button
        type='primary'
        size='large'
        icon={<PhoneOutlined />}
        className='bg-orange-500 border-orange-500 hover:bg-orange-600 w-full sm:w-auto'
        href='tel:0905859287'
      >
        예약하기
      </Button>
      <Button
        size='large'
        icon={<EnvironmentOutlined />}
        className='border-white text-white hover:bg-white hover:text-gray-800 w-full sm:w-auto'
        href='https://www.google.com/maps/place/%EC%88%99%EC%84%B1%EA%B8%88%EB%8F%BC%EC%A7%80+BBQ+Han+Quoc/@16.0688421,108.2373777,17z/data=!4m15!1m8!3m7!1s0x31421829fb7d9d0d:0xdd7169090d5a1e18!2zMTg1IEQuIMSQw6xuaCBOZ2jhu4csIEFuIEjhuqNpIELhuq9jLCBTxqFuIFRyw6AsIMSQw6AgTuG6tW5nIDU1MDAwMA!3b1!8m2!3d16.0688421!4d108.2373777!16s%2Fg%2F11pcsh3_1b!3m5!1s0x3142192d2580d98b:0x754b3377c37f0d6e!8m2!3d16.0688421!4d108.2373777!16s%2Fg%2F11tmhnkkd4?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D'
        target='_blank'
        rel='noopener noreferrer'
      >
        위치 보기
      </Button>
    </div>
  </div>
);

export default BannerContent;

