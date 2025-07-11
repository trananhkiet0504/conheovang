import bannerImg from '../../assets/banner.png';
import BannerContent from '../molecules/BannerContent.tsx';

const Banner = () => (
  <section className='relative flex h-[340px] w-full items-center justify-center overflow-hidden md:h-[420px]'>
    {/* Banner image */}
    <img
      src={bannerImg}
      alt='Banner Nhà Hàng Nướng Con Heo Vàng'
      className='absolute inset-0 z-0 h-full w-full object-cover object-center'
    />
    {/* Overlay for text readability */}
    <div className='absolute inset-0 z-10 bg-black/30'></div>
    {/* Centered content */}
    <div className='relative z-20 flex h-full w-full items-center justify-center'>
      <BannerContent />
    </div>
  </section>
);

export default Banner;
