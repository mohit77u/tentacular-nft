import React from 'react';
import './assets/css/style.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import BerryJuicer from './pages/BerryJuicer';
import LeaderBoard from './pages/LeaderBoard';
import Transactions from './pages/Transactions';
import Farming from './pages/Farming';
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<BerryJuicer />} />
            <Route path='/leaderboard' element={<LeaderBoard />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/farming' element={<Farming />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
