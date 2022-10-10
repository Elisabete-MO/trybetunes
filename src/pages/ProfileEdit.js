import React, { Component } from 'react';
import Header from '../components/Header';
import './padrao.css';

class ProfileEdit extends Component {
  render() {
    return (
      <div className="container" data-testid="page-profile-edit">
        <Header />
      </div>
    );
  }
}

export default ProfileEdit;
