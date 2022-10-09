import React, { Component } from 'react';
import Header from '../components/Header';
import './padrao.css';

class Profile extends Component {
  render() {
    return (
      <div className="container" data-testid="page-profile">
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

export default Profile;
