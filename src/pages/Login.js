import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="boxLogin" data-testid="page-login">
        <h1 className="h1login">TrybeTunes</h1>
        <label htmlFor="inputLogin">
          <input type="text" className="inputLogin" placeholder="Escreva seu nome" />
        </label>
        <label htmlFor="inputSenha">
          <input type="password" className="inputLogin" placeholder="**********" />
        </label>
        <button type="button" id="btnLogin" disabled>ENTRAR</button>
      </div>
    );
  }
}

export default Login;
