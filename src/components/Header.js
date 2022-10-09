import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <nav className="containerMenu">
          <h1 className="titulo">
            Tunes
            <br />
            Trybe
          </h1>
          <Link to="/search" data-testid="link-to-search" className="link">Pesquisa</Link>
          <Link
            to="/favorites"
            data-testid="link-to-favorites"
            className="link"
          >
            Favoritos
          </Link>
          <Link to="/profile" data-testid="link-to-profile" className="link">Perfil</Link>
        </nav>

      </header>
    );
  }
}

export default Header;
