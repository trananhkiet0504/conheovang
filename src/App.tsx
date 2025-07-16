import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './components/pages/Homepage.tsx';
import PhoneCallTemp from './components/templates/PhoneCallTemp';
import Booking from './components/pages/Booking.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
      <PhoneCallTemp />
    </Router>
  );
}

export default App;
