import React from 'react'
import "./index.css";
import {useNavigate, useLocation} from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const path     = location.pathname;

  return (
    <div className='Navbarx'>
      <div onClick={()=>{navigate("/work")}} className={path === "/work" ? "containerOne2 underlineWork" : "containerOne2"}>
        <span>Work</span>
      </div>
      <div onClick={()=>{navigate("/studio")}}  className={path === "/studio" ? "containerTwo2 underlineStudio" : "containerTwo2"}>
        <span>Studio</span>
      </div>
      <div onClick={()=>{navigate("/")}}   className={path === "/" ? "containerThree2 underlineHome" : "containerThree2"}>
        <span>D2R Studio</span>
      </div> 
    </div>
  )
}

export default Navbar