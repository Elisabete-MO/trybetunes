import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './padrao.css';
import Header from '../components/Header';
import { createUser } from '../services/userAPI';
import CarregandoLogin from './CarregandoLogin';

class Search extends Component {
  state = {
    isDisable: true,
    name: '',
    loading: false,
  };

  handleClick = async () => {
    const { history } = this.props;
    const { name } = this.state;
    this.setState({ loading: true });
    await createUser({ name });
    history.push('/search');
  };

  handleChange = (event) => {
    const { value } = event.target;
    const min = '3';
    this.setState({
      name: value,
    }, () => {
      if (value.length >= min) {
        this.setState({
          isDisable: false,
        });
      }
    });
  };

  render() {
    const { isDisable, name, loading } = this.state;
    return (
      loading ? <CarregandoLogin />
        : (
          <div className="container" data-testid="page-search">
            <Header />
            <main className="containerConteudo">
              <h1 className="h1">TrybeTunes</h1>
              <label htmlFor="inputLogin">
                <input
                  type="text"
                  className="inputLogin"
                  data-testid="login-name-input"
                  placeholder="Escreva seu nome"
                  value={ name }
                  onChange={ this.handleChange }
                />
              </label>
              <button
                type="button"
                id="btnLogin"
                data-testid="login-submit-button"
                disabled={ isDisable }
                onClick={ this.handleClick }
              >
                ENTRAR
              </button>
            </main>
          </div>
        )
    );
  }
}

Search.propTypes = {
  history: PropTypes.shape.isRequired,
  push: PropTypes.func.isRequired,
};

export default Search;
