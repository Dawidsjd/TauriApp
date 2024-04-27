import React from 'react';
import BitcoinChart from './components/Chart/BitcoinChart';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TradePanel from './components/TradePanel/TradePanel';

const App: React.FC = () => {
  return (
    <div className="App">
      
      <Navbar/>

      <div className="relative wrapper flex mt-32">

        <div className='gradient_container'>
        <BitcoinChart />
      </div>

      <TradePanel />

      </div>
      
      
      
    </div>
  );
};

export default App;
