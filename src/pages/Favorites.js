import React, { Component } from 'react';
import './padrao.css';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <div className="container" data-testid="page-favorites">
        <Header />
      </div>
    );
  }
}

export default Favorites;
