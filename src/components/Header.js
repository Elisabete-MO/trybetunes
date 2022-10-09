import React, { Component } from 'react';
import '../pages/padrao.css';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state = {
    name: null,
    loading: true,
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({
      name: user,
      loading: false,
    });
  }

  render() {
    const { name, loading } = this.state;
    return (
      <header className="containerPesquisa" data-testid="header-component">
        <label htmlFor="inputPesquisa">
          <input
            type="text"
            className="inputPesquisa"
            placeholder="Digite a sua pesquisa"
          />
        </label>
        <button type="button" className="btnPesquisa">PROCURAR</button>
        <p className="pPesquisa" data-testid="header-user-name">
          { loading ? 'Carregando...' : name.name }
        </p>
      </header>
    );
  }
}

export default Header;
