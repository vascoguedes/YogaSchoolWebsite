import React from 'react';
import '../../App.css';
import schoolPic from '../../images/place.png'

function AboutTheSpace() {

  return (
    <div class="home-aboutTheSpace p-md-5 p-4 w-100">

      <div class='container w-100 d-flex align-items-center justify-content-center'>

        <div class='text col-md-5 col-10'>

          <h1>Sobre o nosso espaço...</h1>
          <p class='pt-2'>
          Localizado na Praceta Joaquim Fernandes Gomes, em VNGaia, este será o novo espaço do Samsara Yoga Studio ✨
          Ainda iremos ter muito trabalhinho pela frente para que tudo fique impecável e apto a receber todas as almas maravilhosas que decidam juntar-se a mim neste novo projeto 💗
          </p>

        </div>

        <div class='col-md-3 d-none d-md-block picFrame offset-1 p-3'>

          <div class=''>
            <img class='schoolPic' src={schoolPic} />
          </div>
          
        </div>
      
      </div>
      
    </div>
  );
}

export default AboutTheSpace;
