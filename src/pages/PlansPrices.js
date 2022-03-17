import React, { useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer';

import image from '../images/IMG_1638.JPG'

function PlansPrices() {


    const [option, setOption] = useState(true);

    return (
    <>
      <Navbar/>

      <div class='plansPrices w-100 m-0 pt-5 p-0 d-flex'>

        <img class='image col-5' src={image}/>

        <div class='right mt-5 p-5 col-5 offset-1 text-center'>
          <h1 class='title mb-5'>ESCOLHE O MELHOR <br/> PLANO PARA TI</h1>

          {option ?
            <div class='box_container d-flex justify-content-center '>
              <div class='col-4 p-3'>
                <div class='element'>
                  <div class='top p-4'>15€</div>
                  <div class='bot p-1'>Particular</div>
                </div>
                <div class='element mt-4'>
                  <div class='top p-4'>10€</div>
                  <div class='bot p-1'>Particular <br/>- Yoga Restaurativo</div>
                </div>
              </div>

              <div class='col-4 p-3'>
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
                    <th class='lighter p-3'>35€</th> <th class='lighter p-3'>30€</th> <th class='darker p-3'>1x</th>
                  </tr>
                  <tr>
                    <th class='lighter p-3'>50€</th> <th class='lighter p-3'>45€</th> <th class='darker p-3'>1x</th>
                  </tr>
                  <tr>
                    <th class='lighter p-3'>65€</th> <th class='lighter p-3'>60€</th> <th class='darker p-3'>1x</th>
                  </tr>
                </table>
                <div class='d-flex informations'>
                  <p class='monthlyCharge'>*valor da mensalidade</p>
                  <p class='classesPerWeek'>Aulas por semana</p>
                </div>
                
            </div>}

          <div class='button1 col-3 p-2 mt-5' onClick={() => setOption(!option)}>
            {option ? 'Planos' : 'Outras Ofertas'}
          </div>
          <div class='button2 col-3 mt-2 p-2 mb-5'>
            Marcar Sessão
          </div>
          
        </div>

      </div>

      <Footer />
    </>
  );
  
}

export default PlansPrices;