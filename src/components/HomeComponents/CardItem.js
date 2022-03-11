import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  
  return (
    <li className='card_container p-5'>

      <div class='card_body'>

        <img class='card_image' src={props.image}/>

        <div class='card_tag'>
          <h5>{props.name}</h5>
        </div>
      </div>
    </li>
  );
}

export default CardItem;
