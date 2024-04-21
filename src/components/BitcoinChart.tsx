import React, { useState, useEffect } from 'react';

const BitcoinChart: React.FC = () => {
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      const widget = new (window as any).TradingView.widget({
        "width": 700,
        "height": 400,
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "3",
        "locale": "pl",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_1cf45",
        "hide_side_toolbar": false,
      });

      // Subskrybuj się na aktualizacje cen Bitcoina
      widget.onChartReady(() => {
        widget.chart().onIntervalUpdate((symbol: string, data: any) => {
          if (symbol === "BITSTAMP:BTCUSD") {
            setCurrentPrice(data.close);
          }
        });
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="tradingview_1cf45"></div>
      {currentPrice && (
        <p>Aktualna cena Bitcoina: ${currentPrice.toFixed(2)}</p>
      )}
    </div>
  );
};

export default BitcoinChart;
