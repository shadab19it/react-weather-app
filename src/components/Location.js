import React from 'react';

const Location = ({city}) => {
    // Destructuring.
    // const { city } = props;

    // From weatherLocation.js...
    //  const city = props.city; 
    return (
        <div><h1> {city} </h1></div>);
};

export default Location;
