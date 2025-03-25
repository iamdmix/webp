import React from 'react';

const Weather = () => {
  const weatherData = {
    city: 'New York',
    temperature: '20°C',
    condition: 'Sunny'
  };

  return (
    <div>
      <h2>Weather in {weatherData.city}</h2>
      <p>Temperature: {weatherData.temperature}</p>
      <p>Condition: {weatherData.condition}</p>
    </div>
  );
};

export default Weather;