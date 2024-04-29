import React from 'react';
import BitcoinChart from './components/Chart/BitcoinChart';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TradePanel from './components/TradePanel/TradePanel';
import LoaderStart from './assets/Loader/LoaderStart';

const App: React.FC = () => {
  return (
    <div className="App">

      {/* Zrobic funkcjonalnosc do Loadingu */}
      {/* <LoaderStart /> */}

      <Navbar/>

      <div className="relative flex items-center justify-center mt-32 ml-4">

        {/* Item 1 */}
        <div className='gradient_container'>
          <BitcoinChart />
        </div>

        {/* Item 2 */}
        <TradePanel />

      </div>
      
      
      
    </div>
  );
};

export default App;
