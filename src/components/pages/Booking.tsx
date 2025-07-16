import { FC } from 'react';
import HeaderHomepage from '../organisms/HeaderHomepage';
import Footer from '../organisms/Footer';
import BookingTemp from '../templates/BookingTemp';

const Booking: FC = () => (
  <>
    <HeaderHomepage />
    <div className='pt-20 min-h-screen bg-gray-50'>
      <BookingTemp />
    </div>
    <Footer />
  </>
);

export default Booking;
