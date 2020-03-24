import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import request from './Api';
import MenuInicio from './MenuInicio';

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

  entrarJuego = (tableroId) => {
    this.setState({ tableroId: tableroId });
  };

  render() {
    return (
      this.state.tableroId ?
        <Redirect to={{ pathname: `/tablero/${this.state.tableroId}` }}/>
        :
        <MenuInicio nuevoJuego={this.crearJuego} entrarJuego={this.entrarJuego}/>
    );
  }
}

export default Inicio;
