import React, { Component } from 'react';
import './padrao.css';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  state = {
    music: [],
    albumInf: {},
  };

  async componentDidMount() {
    const { match } = this.props;
    const value = match.params.id;
    const album = await getMusics(value);
    this.setState({
      music: album.filter((_track, index) => index !== 0),
      albumInf: album[0],
    });
  }

  render() {
    const { music, albumInf } = this.state;
    return (
      <div className="container" data-testid="page-album">
        <Header />
        <main className="containerConteudoAlbum">
          <div>
            <p data-testid="artist-name">{ albumInf.artistName }</p>
            <p data-testid="album-name">{ albumInf.collectionName }</p>
            <ul>
              {music.map((aux) => (
                <li key={ aux.trackId }><MusicCard music={ aux } /></li>))}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
