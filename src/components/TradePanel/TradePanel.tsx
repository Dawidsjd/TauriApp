import React from 'react';

const TradePanel: React.FC = () => {
  const handleButtonClick = (amount: number) => {
    // Tutaj możesz dodać obsługę kliknięcia przycisku, np. zaktualizować stan wartości
    console.log(`Clicked on button with amount: ${amount}`);
  };

  return (
    <div className="relative bg-yellow-300 text-gray-800 p-4 rounded-md w-1/3 " style={{ height: '80vh' }}> {/* Ustawienie wysokości na 70% wysokości widoku przeglądarki */}
      <h2 className="text-lg font-semibold mb-2">Make a Trade</h2>
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-6"> {/* Dodanie marginesu od góry */}
            Buy
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-6"> {/* Dodanie marginesu od góry */}
            Sell
          </button>
        </div>
        <div className='pt-6'>
          <span>Amount</span>
          <input
            type="number"
            min="0"
            step="0.001"
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded w-full"
          />
        </div>
        <div className='pt-6'>
          <span>How much?</span>
          <input
            type="number"
            min="0"
            step="0.01"
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded w-full"
          />
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs hover:bg-gray-400">$50</button>
          <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs hover:bg-gray-400">$100</button>
          <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs hover:bg-gray-400">$500</button>
          <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs hover:bg-gray-400">$1000</button>
          <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs hover:bg-gray-400">$2000</button>
        </div>
        <button className="bg-black text-white px-4 py-4 rounded-full hover:bg-gray-900 mt-6" style={{marginTop: '30%'}}> {/* Dodanie marginesu od góry */}
          Continue
        </button>
      </div>
    </div>
  );
};

export default TradePanel;
