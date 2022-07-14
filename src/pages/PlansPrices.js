import React, { useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer';

import image from '../images/IMG_1638.JPG'

function PlansPrices() {


    const [option, setOption] = useState(false);

    return (
    <>
      <Navbar/>

      <div class='plansPrices row w-100 m-0 pt-5 p-0 d-flex'>

        <img class='image col-lg-5 col-md-12 p-0' src={image}/>

        <div class='right mt-5 p-5 col-xxl-5 col-xl-6 col-lg-7 offset-0 offset-xl-1 text-center'>
          <h1 class='title mb-5'>ESCOLHE O MELHOR <br/> PLANO PARA TI</h1>

          {option ?
            <div class='box_container d-flex justify-content-center '>
              <div class='col-md-4 col-6 p-md-3 p-1'>
                <div class='element'>
                  <div class='top p-4'>15€</div>
                  <div class='bot p-1'>Particular</div>
                </div>
                <div class='element mt-4'>
                  <div class='top p-4'>10€</div>
                  <div class='bot p-1'>Particular <br/>- Yoga Restaurativo</div>
                </div>
              </div>

              <div class='col-md-4 col-6 p-md-3 p-1'>
                <div class='element'>
                  <div class='top p-4'>10€</div>
                  <div class='bot p-1'>Avulso</div>
                </div>
                <div class='element mt-4'>
                  <div class='top p-4'>5€</div>
                  <div class='bot p-1'>Avulso <br/>- Yoga Restaurativo</div>
                </div>
              </div>

            </div>
              :
              <div>
                <table class='table mt-4'>
                  <tr>
                    <th class='darker p-3'>Presencial</th>
                    <th class='darker p-3'>Online</th>
                  </tr>
                  <tr>
                    <th class='lighter p-3'>25€</th> <th class='lighter p-3'>20€</th> <th class='darker p-3'>1x</th>
                  </tr>
                  <tr>
                    <th class='lighter p-3'>35€</th> <th class='lighter p-3'>30€</th> <th class='darker p-3'>2x</th>
                  </tr>
                  <tr>
                    <th class='lighter p-3'>50€</th> <th class='lighter p-3'>45€</th> <th class='darker p-3'>3x</th>
                  </tr>
                  <tr>
                    <th class='lighter p-3'>65€</th> <th class='lighter p-3'>60€</th> <th class='darker p-3'>livre</th>
                  </tr>
                  <tr>
                    <th class='p-0'><p class='information'>*valor da mensalidade</p></th> <th class='p-0'></th> <th class='p-0'><p class='information'>Aulas por semana</p></th>
                  </tr>
                </table>
                
            </div>}

          <div class='button1 col-sm-3 col-6 p-2 mt-5' onClick={() => setOption(!option)}>
            {option ? 'Planos' : 'Outras Ofertas'}
          </div>
          <div class='button2 col-sm-3 col-6 mt-2 p-2 mb-5' onClick={() => window.location.pathname = '/contacts/1'}>
            Marcar Sessão
          </div>
          
        </div>

      </div>

      <Footer />
    </>
  );
  
}

export default PlansPrices;