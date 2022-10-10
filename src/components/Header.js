import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/padrao.css';
import { getUser } from '../services/userAPI';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Header extends Component {
  state = {
    dados: [],
    isDisable: true,
    chave: '',
    name: null,
    loading: true,
    artist: '',
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({
      name: user,
      loading: false,
    });
  }

  handleClick = async () => {
    const { chave } = this.state;
    const result = await searchAlbumsAPI(chave);
    this.setState({
      loading: true,
      dados: result,
      artist: chave,
      chave: '',
    }, () => {
      this.setState({
        loading: false,
      });
    });
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
    const { isDisable, name, chave, loading, dados, artist } = this.state;
    return (
      <header className="containerPesquisa" data-testid="header-component">
        <label htmlFor="inputPesquisa">
          <input
            type="text"
            className="inputPesquisa"
            data-testid="search-artist-input"
            placeholder="Digite a sua pesquisa"
            hidden={ loading }
            value={ chave }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="search-artist-button"
          className="btnPesquisa"
          hidden={ loading }
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
        <main className="containerConteudo">
          <p className="link" hidden={ loading }>
            Resultado de álbuns de:
            {' '}
            { artist }
          </p>
          {dados.length !== 0 ? dados.map((data, index) => ((
            <li className="inputPesquisa" key={ index }>
              {data.collectionName}
              <Link to={ `/album/${data.collectionId}` }>
                <p data-testid={ `link-to-album-${data.collectionId}` }>Ver mais</p>
              </Link>
            </li>))) : <p className="pPesquisa">Nenhum álbum foi encontrado</p>}
        </main>

      </header>
    );
  }
}

export default Header;
