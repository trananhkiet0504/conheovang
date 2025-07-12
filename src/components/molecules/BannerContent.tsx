import React from 'react';
import { Button } from 'antd';
import { PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const BannerContent = () => (
  <div className='flex max-w-4xl flex-col items-center justify-center text-center text-white'>
    <h1 className='mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl'>
      황금돼지 바비큐
    </h1>
    <p className='mb-6 text-lg font-medium sm:text-xl md:text-2xl'>
      베트남 최고의 한국식 바비큐 레스토랑
    </p>
    <div className='flex flex-col gap-3 sm:flex-row sm:gap-4'>
      <Button
        type='primary'
        size='large'
        icon={<PhoneOutlined />}
        className='bg-orange-500 border-orange-500 hover:bg-orange-600'
      >
        예약하기
      </Button>
      <Button
        size='large'
        icon={<EnvironmentOutlined />}
        className='border-white text-white hover:bg-white hover:text-gray-800'
      >
        위치 보기
      </Button>
    </div>
  </div>
);

export default BannerContent;

