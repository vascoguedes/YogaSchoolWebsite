import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer';

import image from '../images/IMG_1638.JPG'

class PlansPrices extends React.Component {

  render() {
    return (
    <>
      <Navbar/>

      <div class='plansPrices w-100 m-0 pt-5 p-0 d-flex'>

        <img class='image col-5' src={image}/>

        <div class='right mt-5 p-5 col-5 offset-1 text-center'>
          <h1 class='title'>ESCOLHE O MELHOR <br/> PLANO PARA TI</h1>

          <div class='button1 col-3 p-2'>
            Outras Ofertas
          </div>
          <div class='button2 col-3 mt-2 p-2'>
            Marcar Sessão
          </div>
          
        </div>

      </div>

      <Footer />
    </>
  );
  }
  
}

export default PlansPrices;