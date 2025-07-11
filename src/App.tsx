import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './components/pages/Homepage.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
