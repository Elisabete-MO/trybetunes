import React, { Component } from 'react';
import './padrao.css';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  state = {
    loading: false,
    elements: [],
  };

  async componentDidMount() {
    await this.consolando();
  }

  consolando = async () => {
    this.setState({ elements: await getFavoriteSongs(), loading: false });
  };

  rendering = () => {
    this.setState({ loading: true }, this.consolando);
  };

  render() {
    const { elements, loading } = this.state;
    return (
      <div className="container" data-testid="page-favorites">
        <Header />
        <div>
          { loading ? 'Carregando...' : (
            elements.map((element) => (
              <li key={ element.trackId }>
                <MusicCard track={ element } att={ this.rendering } />
              </li>)))}
        </div>
      </div>
    );
  }
}

export default Favorites;
