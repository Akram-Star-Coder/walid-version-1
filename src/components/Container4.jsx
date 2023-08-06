import React, { useState, useEffect } from 'react';
import './index.css';

const Container4 = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >666) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button className='ToTop' onClick={handleButtonClick} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default Container4;
