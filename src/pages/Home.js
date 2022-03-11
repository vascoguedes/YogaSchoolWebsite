import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js'
import Header from '../components/HomeComponents/Header';
import Footer from '../components/Footer';


class Home extends React.Component {

  render() {
    return (
    <>
      <Navbar/>
      <Header/>
      <Footer />
    </>
  );
  }
  
}

export default Home;
