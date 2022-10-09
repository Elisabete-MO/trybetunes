import React, { Component } from 'react';
import './padrao.css';
import Header from '../components/Header';

class Album extends Component {
  render() {
    return (
      <div className="container" data-testid="page-album">
        <Header />
        <main className="containerConteudo" />
      </div>
    );
  }
}

export default Album;
