import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="header">
      {showHeader ? (
        <RiCloseFill 
        onClick={()=>{setShowHeader(!showHeader)}}
        className="menu-icon position-fixed top-0 end-0 " />
      ) : (
        <RiMenu3Fill
         className=" menu-icon position-fixed top-0 end-0 " 
         onClick={()=>{setShowHeader(!showHeader)}} />
      )}
      <ul className={`${showHeader ? 'show-header':'hide-header'} n-box1`}>
        <li><Link>Home</Link></li>
        <li><Link>Project</Link></li>
        <li><Link>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Header;
