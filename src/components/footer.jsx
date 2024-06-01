import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    // Update the current date and time on the client side
    const interval = setInterval(() => {
      setCurrentDateTime(new Date().toString());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-purple-200 text-purple-600 py-4 text-center px-3">
      <div className="container mx-auto flex justify-between">
        <p>Grateful for your visit to my portfolio. Thank You!</p>
        <p>{currentDateTime ? currentDateTime : 'Loading date and time...'}</p>
      </div>
    </footer>
  );
};

export default Footer;
