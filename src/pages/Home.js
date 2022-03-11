import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js'
import Header from '../components/HomeComponents/Header';
import AboutTheSpace from '../components/HomeComponents/AboutTheSpace';
import TheClasses from '../components/HomeComponents/TheClasses';
import Footer from '../components/Footer';


class Home extends React.Component {

  render() {
    return (
    <>
      <Navbar/>
      <Header/>
      <AboutTheSpace/>
      <TheClasses/>
      <Footer />
    </>
  );
  }
  
}

export default Home;
