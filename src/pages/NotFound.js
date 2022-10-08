import React from 'react';
import './notFound.css';

class CarregandoErro extends React.Component {
  render() {
    return (
      <div className="carregandoErro" data-testid="page-not-found">
        <h1 className="h1notFound">Ops!</h1>
      </div>
    );
  }
}

export default CarregandoErro;
