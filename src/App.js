import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import CarregandoLogin from './pages/CarregandoLogin';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route exact path="/" component={ Login } />
          <Route path="/carregandoLogin" component={ CarregandoLogin } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default App;
