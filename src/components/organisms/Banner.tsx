import bannerImg from '../../assets/banner1.jpg';
import BannerContent from '../molecules/BannerContent.tsx';

const Banner = () => (
  <section className='relative flex h-[400px] w-full items-center justify-center overflow-hidden sm:h-[450px] md:h-[500px] lg:h-[600px]'>
    {/* Banner image */}
    <img
      src={bannerImg}
      alt='황금돼지 바비큐 레스토랑 배너'
      className='absolute inset-0 z-0 h-full w-full object-contain sm:object-cover object-center'
    />
    {/* Overlay for text readability */}
    <div className='absolute inset-0 z-10 bg-black/30 sm:bg-black/40'></div>
    {/* Centered content */}
    <div className='relative z-20 flex h-full w-full items-center justify-center px-4'>
      <BannerContent />
    </div>
  </section>
);

export default Banner;
