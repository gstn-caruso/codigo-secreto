import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import request from './Api';

class Inicio extends Component {

  constructor(props) {
    super(props);
    this.state = { tableroId: null };
  }

  crearJuego = () => {
    request('/api/tablero/crear', { method: 'POST' })
      .then(({ tablero }) => {
        this.setState({ tableroId: tablero.id });
      })
      .catch(err => alert(err));
  };

  render() {
    return (
      this.state.tableroId ?
        <Redirect to={{ pathname: `/tablero/${this.state.tableroId}` }}/>
        :
        <button onClick={this.crearJuego}>Crear nuevo juego</button>
    );
  }
}

export default Inicio;
