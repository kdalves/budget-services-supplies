import React, { Component } from 'react';
import AppBar from '../components/template/AppBar';
import Container from './Container.jsx';
import Footer from '../components/template/Footer';
import '../assets/index.css';

class Template extends Component {
  render() {
    return (
      <div>
        <AppBar/>
        <Container />
        <Footer />
      </div>
    );
  }
}

export default Template;
