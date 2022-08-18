import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import image from '../images/illust.jpg';

class NotFoundPage extends React.Component {

  render() {
    return (      
    <>
    <NavBar/>
    <div class= 'NotFoundPage h-50 p-5 w-100 d-flex'>
      <div class='text col-6 text-left align-self-center'>
        <h1> Ups...</h1>
        <h3> Página não encontrada</h3>
      </div>
      <img class='image col-6 text-right' alt='Fotografia de erro' src={image}/>
    </div>
    
    <Footer/>
    </>
   
  );
  }
  
}

export default NotFoundPage;
