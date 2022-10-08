import React, { Component } from 'react';
import './padrao.css';

class Album extends Component {
  render() {
    return (
      <div className="container" data-testid="page-album">
        <header className="containerPesquisa">
          <label htmlFor="inputPesquisa">
            <input type="text" className="inputPesquisa" placeholder="Escreva seu nome" />
          </label>
          <button type="button" className="btnPesquisa">PROCURAR</button>
        </header>
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
