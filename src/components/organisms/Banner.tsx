import bannerImg from '../../assets/banner.png';
import BannerContent from '../molecules/BannerContent.tsx';

const Banner = () => (
  <section className='relative flex h-[280px] w-full items-center justify-center overflow-hidden sm:h-[320px] md:h-[420px] lg:h-[480px]'>
    {/* Banner image */}
    <img
      src={bannerImg}
      alt='Banner Nhà Hàng Nướng Con Heo Vàng'
      className='absolute inset-0 z-0 h-full w-full object-cover object-center'
    />
    {/* Overlay for text readability */}
    <div className='absolute inset-0 z-10 bg-black/40'></div>
    {/* Centered content */}
    <div className='relative z-20 flex h-full w-full items-center justify-center px-4'>
      <BannerContent />
    </div>
  </section>
);

export default Banner;
