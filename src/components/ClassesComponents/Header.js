import React from 'react';
import '../../App.css';
import {BsFillArrowDownCircleFill} from "react-icons/bs"  

function Header() {

  return (
    <div class="classes-header mb-5 d-flex align-items-center justify-content-center text-center">

      <h1>AS AULAS QUE TEMOS PARA TI</h1>
      
      <a id="home-about-the-space" href="#home-about-the-space" class="arrow-down"><BsFillArrowDownCircleFill/></a>
    </div>
  );
}

export default Header;
