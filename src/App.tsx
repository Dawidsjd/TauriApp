import React from 'react';
import BitcoinChart from './components/BitcoinChart';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Bitcoin Price Chart</h1>
      <div className='gradient_container'>
        <BitcoinChart />
      </div>
    </div>
  );
};

export default App;
