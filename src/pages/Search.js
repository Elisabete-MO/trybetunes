import React, { Component } from 'react';
import './padrao.css';
import Header from '../components/Header';

class Search extends Component {
  render() {
    return (
      <div className="container" data-testid="page-search">
        <Header />
      </div>
    );
  }
}

export default Search;
