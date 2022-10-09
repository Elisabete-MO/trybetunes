import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/padrao.css';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state = {
    isDisable: true,
    chave: '',
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

  handleClick = async () => {
    // const { history } = this.props;
    // const { name } = this.state;
    // this.setState({ loading: true });
    // await createUser({ name });
    // history.push('/search');
  };

  handleChange = (event) => {
    const { value } = event.target;
    const min = '2';
    this.setState({
      chave: value,
    }, () => {
      if (value.length >= min) {
        this.setState({
          isDisable: false,
        });
      }
    });
  };

  render() {
    const { isDisable, name, chave, loading } = this.state;
    return (
      <header className="containerPesquisa" data-testid="header-component">
        <label htmlFor="inputPesquisa">
          <input
            type="text"
            className="inputPesquisa"
            data-testid="search-artist-input"
            placeholder="Digite a sua pesquisa"
            value={ chave }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="search-artist-button"
          className="btnPesquisa"
          disabled={ isDisable }
          onClick={ this.handleClick }
        >
          PROCURAR
        </button>
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
