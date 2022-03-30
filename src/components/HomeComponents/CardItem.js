import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  
  return (
    <li className='card_container p-5'>

      <div class='card_body' onClick={() => window.location.href = '/classes#' + props.id}>

        <img class='card_image' src={props.image}/>

        <div class='card_tag p-3'>
          <h4 class='m-0'>{props.name}</h4>
        </div>
      </div>
    </li>
  );
}

export default CardItem;
