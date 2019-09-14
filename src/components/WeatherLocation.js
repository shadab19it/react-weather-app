import React from 'react';

import Location from './Location';
import WeatherData from './WeatherData';

// Functional Component.

// Cuerpo del componente. Arrow function con codigo JSX.
const WeatherLocation = () => (
    <div>
        <Location city={'Zaragoza (Spain)'}></Location>
        <WeatherData></WeatherData>
    </div>
);

// Exportamos por defecto.
export default WeatherLocation;