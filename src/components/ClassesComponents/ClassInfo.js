import React from 'react';
import '../../App.css';
import schoolPic from '../../images/place.png'

function ClassInfo(props) {

  console.log(props);

  return (
    <div class="classes-classInfo p-5 w-100">

      <div class='container w-100 '>

        <div class='element d-flex justify-content-center'>

          {props.imageside ? 
            <div class='col-5'>

              <img class='image w-100' src={props.image} />

            </div> : null
          }
          
          <div class='col-5 right p-5 text-center align-self-center'>

            <h1 class='pb-4'>{props.title}</h1>

            {props.description.map((line) => <p>{line}</p>)}
            <p>{props.duration}</p>
            <p>{props.price}</p>

          </div>

          {!props.imageside ? 
            <div class='col-5'>

              <img class='image w-100' src={props.image} />

            </div> : null
          }

        </div>

      </div>
      
      
    </div>
  );
}

export default ClassInfo;
