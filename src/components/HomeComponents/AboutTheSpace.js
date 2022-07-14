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
          Localizado em Vila Nova de Gaia, o Samsara Yoga Studio nasce com a vontade
          de levar a prática do yoga mais longe, a mais pessoas. É um espaço de união
          e partilha, onde se aprendem não só posturas e exercícios de respiração,
          como também valores morais e técnicas meditativas que podem ser aplicadas
          no dia-a-dia.
          É um espaço onde toda a gente é bem-vinda, livre de julgamentos e repleto de
          amor e compaixão entre todos.
          É de fácil acesso, tem uma paragem de autocarro perto e estacionamento gratuito
          à porta e na rua.
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
