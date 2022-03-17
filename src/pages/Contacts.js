import React, { useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer';

import image from '../images/IMG_1580.JPG'

function Contacts(params) {


    const [option, setOption] = useState(params.option ? params.option : 1);

    return (
    <>
      <Navbar/>

      <div class='contacts w-100 m-0 pt-5 p-0 d-flex align-items-center'>

        <div class='form col-5 p-5 col-offset-2'>
          <h1>Contacta-me</h1>
          <h4>Se tiveres alguma dúvida ou precises de alguma informação, não hesites em mandar-me uma mensagem. <br/>Respondo o mais breve possível.</h4>
        </div>

        <img class='image col-5' src={image}/>
        
      </div>

      <Footer />
    </>
  );
  
}

export default Contacts;