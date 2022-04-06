import React from 'react';
import '../../App.css';

import CardItem from './CardItem';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from '../../images/IMG_1506.JPG'
import image2 from '../../images/IMG_1547.JPG'
import image3 from '../../images/IMG_1638.JPG'
import image4 from '../../images/IMG_1580.JPG'

function TheClasses() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div class="homeTheClasses text-center p-md-5 p-0 pt-4 w-100">
      <div className='cards' id='questions' data-spy="scroll" data-target="#navbar" data-offset="0">
          <h1>As nossas aulas</h1>
          
            <Carousel className="slider p-md-4 p-0 w-100" responsive={responsive} infinite={true} autoPlay={true} showDots={true}>
                <CardItem
                        name='VINYASA YOGA'
                        image={image1}
                        id="1"
                      />
                <CardItem
                        name='POWER VINYASA YOGA'
                        image={image2}
                        id="2"
                      />
                <CardItem
                        name='YOGA PARA INICIANTES'
                        image={image3}
                        id="3"
                      />
                <CardItem
                        name='YOGA RESTAURATIVO'
                        image={image4}
                        id="4"
                      />                  
            </Carousel> 
      </div>

      <div class='bookClass col-lg-3 col-md-4 col-6 mt-md-5 mt-2 p-3' onClick={() => window.location.pathname = '/contacts/1'}>
        Marcar aula
      </div>

    </div>
  );
}


export default TheClasses;
