import React from 'react';
import '../../App.css';
import schoolPic from '../../images/place.jpeg'

function AboutTheSpace() {

  return (
    <div class="d-flex w-100">

      <div class='home-aboutTheSpace col-xl-10 col-lg-9 col-12 d-flex align-items-center justify-content-center'>

        <div class='text col-xl-8 col-lg-10 p-lg-2 p-5'>

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
      </div>

      <img class='schoolPic col-xl-2 col-lg-3 d-none d-lg-block' src={schoolPic} />
      
    </div>
  );
}

export default AboutTheSpace;
