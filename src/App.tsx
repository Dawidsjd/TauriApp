import React from 'react';
import BitcoinChart from './components/BitcoinChart';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Bitcoin Price Chart</h1>
      <BitcoinChart />
    </div>
  );
};

export default App;
