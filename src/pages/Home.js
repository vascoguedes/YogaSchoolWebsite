import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer';


class Home extends React.Component {

  render() {
    return (
    <>
      <Navbar/>
      <Footer />
    </>
  );
  }
  
}

export default Home;
