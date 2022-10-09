import React, { Component } from 'react';
import Header from '../components/Header';
import './padrao.css';

class Profile extends Component {
  render() {
    return (
      <div className="container" data-testid="page-profile">
        <Header />
        <main className="containerConteudo" />
      </div>
    );
  }
}

export default Profile;
