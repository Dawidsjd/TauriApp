import React from 'react';
import { TailwindcssButtons } from '../../assets/buttons/TailwindcssButtons';
import { IconArrowDown } from '@tabler/icons-react';
import TradeInput from '../../assets/inputs/TradeInput';


const TradePanel: React.FC = () => {
  const handleButtonClick = (amount: number) => {
    
    console.log(`Clicked on button with amount: ${amount}`);
  };

  return (
    <div className="relative bg-yellow-300 text-gray-800 p-4 rounded-md w-1/3 " style={{ height: '80vh' }}> 
      <h2 className="text-lg font-semibold mb-2">Make a Trade</h2>
      <div className="flex flex-col space-y-2">
        <div className="flex w-full">
        <button className="text-black px-18 rounded-full mt-6 transition-colors bg-yellow-300 z-10 flex items-center border border-black tracking-wide" style={{ width: '250px', position: 'relative', left: '20px' }}>
  <div className='flex justify-center items-center rounded-full mr-6 bg-black w-1/3 h-12 border-3 border-black'>
    <IconArrowDown className='text-white'/>
  </div>
  <span>BUY</span>
</button>



        <button className=" text-black px-18 py-3 rounded-full mt-6 transition-colors tracking-wide" style={{ width: '250px',position:'relative', right: '20px', border: '1px solid #d0cf53' }}>
          SELL
        </button>
        </div>
        <div className='pt-6'>
          <span>Amount</span>

          <TradeInput placeholderText='ex. 0.001' />

        </div>
        <div className='pt-6'>
          <span>How much?</span>

          <TradeInput placeholderText='10' />

        </div>
        <div className="flex items-center space-x-2">
  <button className="border border-black text-gray-800 px-2 py-1 rounded-full text-xs hover:bg-gray-900 hover:text-white">$50</button>
  <button className="border border-black text-gray-800 px-2 py-1 rounded-full text-xs hover:bg-gray-900 hover:text-white">$100</button>
  <button className="border border-black text-gray-800 px-2 py-1 rounded-full text-xs hover:bg-gray-900 hover:text-white">$500</button>
  <button className="border border-black text-gray-800 px-2 py-1 rounded-full text-xs hover:bg-gray-900 hover:text-white">$1000</button>
  <button className="border border-black text-gray-800 px-2 py-1 rounded-full text-xs hover:bg-gray-900 hover:text-white">$2000</button>
</div>


      
        <TailwindcssButtons />
      </div>
    </div>
  );
};

export default TradePanel;
