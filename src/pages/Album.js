import React, { Component } from 'react';
import './padrao.css';
import Header from '../components/Header';

class Album extends Component {
  render() {
    return (
      <div className="container" data-testid="page-album">
        <Header />
        <nav className="containerMenu">
          <h1>Pesquisa</h1>
          <h1>Favoritos</h1>
          <h1>Perfil</h1>
        </nav>
        <main className="containerConteudo" />
      </div>
    );
  }
}

export default Album;
