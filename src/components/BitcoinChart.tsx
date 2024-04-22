import React, { useEffect, useState } from 'react';
import { createChart, PriceLineOptions, AreaSeriesData } from 'lightweight-charts';

const BitcoinChart: React.FC = () => {
  const [bitcoinData, setBitcoinData] = useState<AreaSeriesData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Pobierz dane z API Bitcoin
        const response = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json');
        const data = await response.json();
        
        // Przetwórz dane na format odpowiedni dla wykresu
        const processedData: AreaSeriesData[] = Object.keys(data.bpi).map((date) => ({
          time: new Date(date).getTime() / 1000,
          value: data.bpi[date],
        }));
        
        // Ustaw dane w stanie komponentu
        setBitcoinData(processedData);
      } catch (error) {
        console.error('Wystąpił błąd podczas pobierania danych:', error);
      }
    };

    // Pobierz dane na początku
    fetchData();

    // Ustaw interwał odświeżania danych co np. 60 sekund
    const intervalId = setInterval(fetchData, 60000);

    // Clean up
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const chartOptions = {
      layout: {
        textColor: '#F3EF52',
        background: { 
          type: 'solid',
          color: 'rgba(0, 0, 0, 0)' // Przezroczyste tło
        },
      },
    };

    const container = document.getElementById('container');
    if (!container) return;

    const chart = createChart(container, chartOptions);

    const series = chart.addAreaSeries({
      lineColor: '#F3EF52',
      topColor: 'rgba(243, 239, 82, 0.4)', // Niebieski kolor: rgba(41, 98, 255, 0.4)
      bottomColor: 'rgba(243, 239, 82, 0)',
      lineWidth: 2,
    });

    series.setData(bitcoinData);

    // Dodaj linie cenowe
    const minimumPrice = Math.min(...bitcoinData.map(data => data.value));
    const maximumPrice = Math.max(...bitcoinData.map(data => data.value));
    const avgPrice = (maximumPrice + minimumPrice) / 2;

    const lineWidth = 2;

    const minPriceLine: PriceLineOptions = {
      price: minimumPrice,
      color: '#ef5350',
      lineWidth: lineWidth,
      lineStyle: 2, // LineStyle.Dashed
      axisLabelVisible: true,
      title: 'min price',
    };

    const avgPriceLine: PriceLineOptions = {
      price: avgPrice,
      color: 'black',
      lineWidth: lineWidth,
      lineStyle: 1, // LineStyle.Dotted
      axisLabelVisible: true,
      title: 'ave price',
    };

    const maxPriceLine: PriceLineOptions = {
      price: maximumPrice,
      color: '#26a69a',
      lineWidth: lineWidth,
      lineStyle: 2, // LineStyle.Dashed
      axisLabelVisible: true,
      title: 'max price',
    };

    series.createPriceLine(minPriceLine);
    series.createPriceLine(avgPriceLine);
    series.createPriceLine(maxPriceLine);

    chart.timeScale().fitContent();

    // Clean up on unmount
    return () => {
      chart.remove();
    };
  }, [bitcoinData]);

  return <div id="container" style={{ width: '100%', height: '500px' }}></div>;
};

export default BitcoinChart;
