import React from 'react';
import '../../App.css';
import {BsFillArrowDownCircleFill} from "react-icons/bs"

function Header() {

  return (
    <div class="home-header mb-5 d-flex align-items-center justify-content-center text-center">

      <h1>SAMSARA <br/>
      
      <h2>
      YOGA STUDIO
      </h2>
      </h1>

      <a id="home-about-the-space" href="#home-about-the-space" class="arrow-down"><BsFillArrowDownCircleFill/></a>
    </div>
  );
}

export default Header;
