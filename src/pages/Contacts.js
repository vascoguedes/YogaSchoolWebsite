import React, { useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer';

import image from '../images/IMG_1580.JPG'

function Contacts(params) {


    const [option, setOption] = useState(params.option ? params.option : 1);
    console.error(option);

    return (
    <>
      <Navbar/>

      <div class='contacts w-100 m-0 pt-5 p-0 d-flex align-items-center'>

        <div class='form col-5 p-5 col-offset-2'>
          <h1>Contacta-me</h1>
          <h4>Se tiveres alguma dúvida ou precises de alguma informação, não hesites em mandar-me uma mensagem. <br/>Respondo o mais breve possível.</h4>

          <options class='d-flex options col-7 p-2 mt-4'>
            <button class={option == 1 ? 'option selected' : 'option'} onClick={() => setOption(1)}>Geral</button>
            <button class={option == 2 ? 'option selected' : 'option'} onClick={() => setOption(2)}>Marcação de Aula</button>
            <button class={option == 3 ? 'option selected' : 'option'} onClick={() => setOption(3)}>Inscrição</button>
          </options>
          
          <form class='p-3 w-100'>

            {option == 1 ? 

              <>
                <input class='row mt-4 formInput w-100' placeholder='Nome'/>
                <input class='row mt-4 formInput w-100' placeholder='Telefone'/>
                <input class='row mt-4 formInput w-100' placeholder='Email'/>
                <textarea class='row mt-4 formInput w-100' placeholder='A tua mensagem'/>
              </>

              :
              
            option == 2 ? 

              <>
                <div class='d-flex w-100'>
                  <input class='row mt-4 formInput col-5' placeholder='Nome'/>
                  <input class='row mt-4 formInput formInputRight col-5' placeholder='Telefone'/>
                </div>
                <input class='row mt-4 formInput w-100' placeholder='Email'/>

                <select name="Tipo de aula">
                  <option value="VINYASA YOGA">VINYASA YOGA</option>
                  <option value="POWER VINYASA YOGA">POWER VINYASA YOGA</option>
                  <option value="YOGA PARA INICIANTES">YOGA PARA INICIANTES</option>
                  <option value="YOGA RESTAURATIVO">YOGA RESTAURATIVO</option>
                </select>

                <select name="Método de pagamento">
                  <option value="Dinheiro">Dinheiro</option>
                  <option value="MB Way">MB Way</option>
                </select>

                <input type="datetime-local" id="meeting-time"
                  name="meeting-time" value="2018-06-12T19:30"
                  min="2018-06-07T00:00" max="2018-06-14T00:00"></input>

                <textarea class='row mt-4 formInput w-100' placeholder='Notas'/>

              </>

              : 

              <>
                <div class='d-flex w-100'>
                  <input class='row mt-4 formInput col-5' placeholder='Nome'/>
                  <input class='row mt-4 formInput formInputRight col-5' placeholder='Telefone'/>
                </div>

                <div class='d-flex w-100'>
                  <input class='row mt-4 formInput col-5' placeholder='Email'/>
                  <input type="datetime-local" id="meeting-time"
                    name="meeting-time" value="2018-06-12T19:30"
                    min="2018-06-07T00:00" max="2018-06-14T00:00"/>
                </div>

                <select name="Tipo de aula">
                  <option value="VINYASA YOGA">VINYASA YOGA</option>
                  <option value="POWER VINYASA YOGA">POWER VINYASA YOGA</option>
                  <option value="YOGA PARA INICIANTES">YOGA PARA INICIANTES</option>
                  <option value="YOGA RESTAURATIVO">YOGA RESTAURATIVO</option>
                </select>

                <select name="Método de pagamento">
                  <option value="Dinheiro">Dinheiro</option>
                  <option value="MB Way">MB Way</option>
                </select>

                

                <textarea class='row mt-4 formInput w-100' placeholder='Notas'/>                
              </>
            }
            
            <input type="checkbox" name='checkbox' class='formCheckBox mt-4'/>
            <label for="checkbox">Desejo receber informações de aulas e eventos futuros</label>

            <button class='row mt-3 w-100'>Enviar</button>
          </form>

          

        </div>

        <img class='image col-5' src={image}/>
        
      </div>

      <Footer />
    </>
  );
  
}

export default Contacts;