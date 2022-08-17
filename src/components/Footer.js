import React from 'react';
import '../App.css';
import logo from '../images/logo.webp';

import {AiOutlineInstagram} from 'react-icons/ai';

function Footer() {

  return (
    <div class="footer">
      <div class="information container p-4">

        <div class='row line col-md-4 col-8 w-100' />
        
        <div class='row w-100 d-flex align-items-center justify-content-center'>
          <img class='col-md-2 col-6 p-2' src={logo}/>

          <div class='col-md-6 col-10 rightInfo text-md-end text-center pt-2'>
            <p>Praceta Joaquim Fernandes Gomes nº76, Vila Nova de Gaia</p>
            <p>samsarayogastudio@hotmail.com</p>
            <p className='phone-number'>+351 915102157</p>
            <a href="https://www.instagram.com/samsara.yogastudio/" target="_blank" className='instagram_logo'><AiOutlineInstagram/></a>
          </div>
        </div>

      </div>
      <div class="copyright p-1 d-flex justify-content-center">
        Copyright ©2022 Mariana Cardoso
      </div>
    </div>
  );
}

export default Footer;
