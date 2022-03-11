import React from 'react';
import '../../App.css';
import schoolPic from '../../images/place.png'

function AboutTheSpace() {

  return (
    <div class="home-aboutTheSpace p-5 w-100">

      <div class='container d-flex align-items-center justify-content-center'>

        <div class='text col-5'>

          <h1>Sobre o nosso espaço...</h1>
          <p class='pt-2'>
          Localizado na Praceta Joaquim Fernandes Gomes, em VNGaia, este será o novo espaço do Samsara Yoga Studio ✨
          Ainda iremos ter muito trabalhinho pela frente para que tudo fique impecável e apto a receber todas as almas maravilhosas que decidam juntar-se a mim neste novo projeto 💗
          </p>

        </div>

        <div class='picFrame col-3 offset-1 p-3'>

          <div class=''>
            <img class='schoolPic' src={schoolPic} />
          </div>
          
        </div>
      
      </div>
      
    </div>
  );
}

export default AboutTheSpace;
