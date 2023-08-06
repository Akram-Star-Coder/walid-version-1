import React, {useRef , useEffect} from 'react';
import './index.css'; // Import the CSS file with custom styles
import Src from '../store/house.mp4';


const Container3 = () => {
    
  return (
    <div  className="video-container">
      <video  src={Src} className="video-element" loop autoPlay muted>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Container3;
