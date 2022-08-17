import React from 'react';
import '../../App.css';

function ClassInfo(props) {

  return (
    <div class="classes-classInfo p-md-5 p-3 w-100" id={props.id}>

      <div class='container'>

        <div class='element row d-flex justify-content-center'>

          {props.imageside ?
            <div class='col-5 d-none d-lg-block'>

              <img class='image w-100' src={props.image} />

            </div> : null
          }

          {window.innerWidth <= 991 ?
            <div class='col-12 p-0 h-25'>

              <img class='image w-100 h-100' src={props.image} />

            </div> : null
          }
          
          <div class='col-lg-7 col-12 right p-lg-5 p-3 text-center align-self-center'>

            <h1 class='pb-4'>{props.title}</h1>

            {window.innerWidth > 991 ? props.description.map((line) => <p>{line}</p>) : props.mobile.map((line) => <p>{line}</p>)}
            <p>{props.duration}</p>
            <p>{props.price}</p>

            <div class='bookSession p-1' onClick={() => window.location.pathname = '/contacts/1'}>
              Marcar Sessão
            </div>

          </div>

          {!props.imageside ? 
            <div class='col-5 d-none d-lg-block'>

              <img class='image w-100' src={props.image} />

            </div> : null
          }

        </div>

      </div>
      
      
    </div>
  );
}

export default ClassInfo;
