import React, { useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer';

import image from '../images/IMG_1580_2.jpg'

function Contacts() {

    const [option, setOption] = useState(window.location.pathname.charAt(10));
    console.error(option);

    return (
    <>
      <Navbar/>

      <div style={{height: '100%'}} class='flex-column-reverse flex-lg-row m-0 pt-5 p-0 d-flex'>

        <div class='contacts form col-xl-8 col-lg-7 col-md-12 col-12 p-xl-5 p-md-5 p-4 align-items-center d-flex'>
          <div class='col-xl-10 col-12'>
            <h1>Contacta-me</h1>
            <h5>Se tiveres alguma dúvida ou precises de alguma informação, não hesites em mandar-me uma mensagem. <br/>Respondo o mais breve possível.</h5>

            {option != 1 ?
              <options class='d-flex options col-7 p-2 mt-4'>
                <button class={option == 1 ? 'option selected' : 'option'} onClick={() => setOption(1)}>Geral</button>
                <button class={option == 2 ? 'option selected' : 'option'} onClick={() => setOption(2)}>Marcação de Aula</button>
                <button class={option == 3 ? 'option selected' : 'option'} onClick={() => setOption(3)}>Inscrição</button>
              </options>
            : null}          
            
            <form class='p-3 w-100'>

              {option == 1 ? 

                <>
                  <input class='formInput w-100' placeholder='Nome'/>
                  <input class='formInput w-100' placeholder='Telefone'/>
                  <input class='formInput w-100' placeholder='Email'/>
                  <textarea class='formInput w-100' placeholder='A tua mensagem'/>
                </>

                :
                
              option == 2 ? 

                <>
                  <div class='d-flex w-100'>
                    <input class='formInput col-6' placeholder='Nome'/>
                    <input class='formInput formInputRight col-5' placeholder='Telefone'/>
                  </div>
                  <input class='formInput w-100' placeholder='Email'/>

                  <div class='w-100 mt-1'>
                    <select name="Tipo de aula" class='formInputSelect col-3'>
                      <option value="VINYASA YOGA">VINYASA YOGA</option>
                      <option value="POWER VINYASA YOGA">POWER VINYASA YOGA</option>
                      <option value="YOGA PARA INICIANTES">YOGA PARA INICIANTES</option>
                      <option value="YOGA RESTAURATIVO">YOGA RESTAURATIVO</option>
                    </select>

                    <select name="Método de pagamento" class='formInputSelect col-3 offset-1'>
                      <option value="Dinheiro">Dinheiro</option>
                      <option value="MB Way">MB Way</option>
                    </select>

                    <input class='formInputSelect col-3 offset-1' type="datetime-local" id="meeting-time"
                      name="meeting-time" value="2018-06-12T19:30"
                      min="2018-06-07T00:00" max="2018-06-14T00:00"></input>
                  </div>

                  <textarea class='formInput w-100' placeholder='Notas'/>

                </>

                : 

                <>
                  <div class='d-flex w-100 mt-3 mb-2'>
                    <input class='formInput col-6' placeholder='Nome'/>
                    <input class='formInput formInputRight col-5' placeholder='Telefone'/>
                  </div>

                  <input class='formInput w-100' placeholder='Email'/>

                  <div class='d-flex w-100'>
                    <input class='formInput col-6' placeholder='Morada'/>
                    <input class='formInput formInputRight col-5' placeholder='NIF'/>
                  </div>

                  <div class='w-100'>
                    <select name="Tipo de Plano" class='formInputSelect'>
                      <option value="VINYASA YOGA">VINYASA YOGA</option>
                      <option value="POWER VINYASA YOGA">POWER VINYASA YOGA</option>
                      <option value="YOGA PARA INICIANTES">YOGA PARA INICIANTES</option>
                      <option value="YOGA RESTAURATIVO">YOGA RESTAURATIVO</option>
                    </select>

                    <input class='formInputSelect offset-1' type="datetime-local" id="meeting-time"
                      name="meeting-time" value="2018-06-12T19:30"
                      min="2018-06-07T00:00" max="2018-06-14T00:00"/>
                      
                    <select name="Método de pagamento" class='formInputSelect right'>
                      <option value="Dinheiro">Dinheiro</option>
                      <option value="MB Way">MB Way</option>
                    </select>
                  </div>
                  

                  <textarea class='formInput w-100' placeholder='Notas'/>                
                </>
              }
              
              <input type="checkbox" name='checkbox' class='formCheckBox m-3 mt-4'/>
              <label for="checkbox">Desejo receber informações de aulas e eventos futuros</label>

              <button class='mt-3 w-100 p-1 button'>Enviar</button>
            </form>

          
            </div>
        </div>

        <img class='image col-xl-4 col-lg-5 col-md-12 col-12 p-0' src={image}/>
        
      </div>

      <Footer />
    </>
  );
  
}

export default Contacts;