import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Carregando from './Carregando';

class MusicCard extends Component {
  state = {
    carregando: false,
    favorite: false,
  };

  async componentDidMount() {
    await this.getFavorite();
  }

  async componentDidUpdate() {
    await this.getFavorite();
  }

  getFavorite = async () => {
    const { music } = this.props;
    const favorites = await getFavoriteSongs();
    const wasFavorite = favorites.find((aux) => (
      aux.trackId === music.trackId));
    if (wasFavorite) {
      this.setState(
        {
          favorite: wasFavorite,
        },
      );
    }
  };

  handleSave = async ({ event }) => {
    const { music, att } = this.props;
    this.setState({
      carregando: true,
    });
    if (event.checked) {
      await addSong(music);
      this.setState({
        favorite: true,
      });
    } else {
      await removeSong(music);
      this.setState({
        favorite: false,
      });
    }
    this.setState({
      carregando: false,
    });
    att();
  };

  render() {
    const { music } = this.props;
    const { carregando, favorite } = this.state;
    return (
      !carregando
        ? (
          <div>
            <p>{music.trackName}</p>
            <audio data-testid="audio-component" src="{previewUrl}" controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
              .
            </audio>
            <label htmlFor={ music.trackId }>
              Favorita
              <input
                type="checkbox"
                id={ music.trackId }
                data-testid={ `checkbox-music-${music.trackId}` }
                onChange={ this.handleSave }
                checked={ favorite }
              />
            </label>
          </div>) : <Carregando />
    );
  }
}

MusicCard.defaultProps = {
  att: () => {},
};

MusicCard.propTypes = {
  music: PropTypes.PropTypes.shape().isRequired,
  att: PropTypes.func,
};

export default MusicCard;
