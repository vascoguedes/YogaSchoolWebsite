import React from 'react';
import '../App.css';
import logo from '../images/logo.png';

function Footer() {

  return (
    <div class="footer">
      <div class="information container pt-4 mt-5">

        <div class='row line w-100' />
        
        <div class='row p-3 w-100 d-flex align-items-center justify-content-center'>
          <img class='col-2 p-2' src={logo}/>

          <div class='col-6 rightInfo text-end'>
            <p>Praceta Joaquim Fernandes Gomes, Vila Nova de Gaia</p>
            <p>samsarayogastudio@hotmail.com</p>
            <p>+351 915102157</p>
          </div>
        </div>

      </div>
      <div class="copyright d-flex justify-content-center">
        <p class='m-2'>Copyright ©2022 Mariana Cardoso</p>
      </div>
    </div>
  );
}

export default Footer;
