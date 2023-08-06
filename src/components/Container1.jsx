import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';
import House from '../store/house.mp4';
import House1 from '../store/h1.jpg';
import House2 from '../store/h2.jpg';
import {useNavigate, useLocation} from 'react-router-dom';


const Container1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path     = location.pathname;

  const mediaItems = [
    { type: 'image', url: "https://www.pcclean.io/wp-content/uploads/2020/4/re6j6n.jpg" },
    { type: 'image', url: "https://getwallpapers.com/wallpaper/full/a/b/b/24298.jpg" },
    { type: 'image', url: "https://images7.alphacoders.com/596/596277.jpg" },
    // Add more media items (images or videos) as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setisHovered] = useState(false);
  const [workMouse, setWorkMouse] = useState(false);
  const [studioMouse, setStudioMouse] = useState(false);
  const [d2rMouse, sets2rMouse] = useState(false);
  const [x, setX] = useState(false);
  const [showNavbar, setShowSecondNavbar] = useState(false);
  const [entered, setentered] = useState(true);


  const nextMediaItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const prevMediaItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
  };

 

  useEffect(() => {
    // Automatically change media item every 3 seconds
    const interval = setInterval(nextMediaItem, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleHover = ()=>{
    setisHovered(!isHovered);
  }



  const handleClickX = (event)=>{
    var windoWidth = window.innerWidth;
    const demiWindowWidth = Math.round(windoWidth/2);
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if((workMouse === false ) && (studioMouse === false) && (x === false) && (d2rMouse === false)) {
        if(mouseX > demiWindowWidth){
            nextMediaItem();
        }
        else{
            prevMediaItem();
        }
    }
  }
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [divPosition, setDivPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    };

    // Update the position of the div whenever the mouse moves
    useEffect(() => {
        setDivPosition(mousePosition);
    }, [mousePosition]);

   


    const [scrolledPixels, setScrolledPixels] = useState(0);
    const handleScroll = () => {
        const scrolled = window.scrollY;
        setScrolledPixels(scrolled);
        console.log("Scrolled px  ===>  "+scrolled);
      };
      useEffect(() => {
        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

    
        // Clean up the scroll event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }); // Empty dependency array to ensure the event listener is added and removed only once
        


  return (
    <>
    <div onMouseEnter={()=>{setentered(true)}} onMouseLeave={()=>{setentered(false)}} onClick={handleClickX} className="carousel-container" onMouseMove={handleMouseMove} >
        <div className="navbarProvisoire">
            <div onClick={()=>{navigate("/work")}} onMouseEnter={()=>{setWorkMouse(true)}} onMouseLeave={()=>{setWorkMouse(false)}} className={currentIndex === 2 ? "containerOne add2" : "containerOne"}>
                <span className={currentIndex === 2 && "addColorBlackToNavLinks"}>Work</span>
            </div>
            <div onClick={()=>{navigate("/studio")}} onMouseEnter={()=>{setStudioMouse(true)}} onMouseLeave={()=>{setStudioMouse(false)}}  className={currentIndex === 2 ? "containerTwo add2" : "containerTwo"}>
                <span className={currentIndex === 2 && "addColorBlackToNavLinks"}>Studio</span>
            </div>
            <div onClick={()=>{navigate("/")}} onMouseEnter={()=>{sets2rMouse(true)}} onMouseLeave={()=>{sets2rMouse(false)}}  className="containerThree">
                <span>D2R Studio</span>
            </div>
        </div>
        <div className="titleCentered"   >
            <span className={currentIndex === 1 && "addColorBlack"} onMouseEnter={()=>{setX(true);}} onMouseLeave={()=>{setX(false);}} >3D Services for Architectural Marvels</span>
            <button onClick={()=>{navigate("/work")}}  onMouseEnter={()=>{setX(true);handleHover();}} onMouseLeave={()=>{setX(false);handleHover();}}  >Explore Projects {!isHovered ? <i className="fa-solid fa-arrow-right"></i> : <i className="fa-solid fa-arrow-right addHoveredArrow"></i>} </button>
        </div>
        {
            !workMouse && !studioMouse && !d2rMouse && !x && entered && (
                <div
                style={{
                    position: 'absolute',
                    left: divPosition.x + 10,
                    top: divPosition.y + 10,
                    width: '50px',
                    height: '50px',
                    zIndex: '9',
                    backgroundColor: 'rgba(0, 0, 0, 0.5555)',
                    borderRadius: '50%',
                    color : "white",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: '0.02s all ease-in-out',
                }}
                >
                {/* Add debugging statements here */}
                {mousePosition.x > window.innerWidth/2 ? (
                    <i className="fa-solid fa-arrow-right"></i>
                ) : (
                    <i className="fa-solid fa-arrow-left"></i>
                )}
                </div>
            )
        }
      <Carousel
        selectedItem={currentIndex}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showIndicators={false}
        interval={4000}
        showArrows={false}
        onChange={(index) => setCurrentIndex(index)}
      >
        {mediaItems.map((item, index) => (
          <div key={index}>
            {item.type === 'image' ? (
              <img  src={item.url} alt={`Image ${index + 1}`} className='imageCarousel' />
            ) : (
              <video src={item.url} alt={`Video ${index + 1}`} className='videoCarousel' autoPlay loop muted>
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </Carousel>
    </div>
        <div className={window.scrollY > 56 ? "SecondNavbar showSecondeNavbar" : "SecondNavbar"}>
            <div onClick={()=>{navigate("/work")}} className="containerOne2">
                <span>Work</span>
            </div>
            <div onClick={()=>{navigate("/studio")}} className="containerTwo2">
                <span>Studio</span>
            </div>
            <div onClick={()=>{navigate("/")}}  className={path === "/" ? "containerThree2 underlineHome" : "containerThree2"}>
                <span>D2R Studio</span>
            </div> 
        </div>       
    </>
  );
}

export default Container1;