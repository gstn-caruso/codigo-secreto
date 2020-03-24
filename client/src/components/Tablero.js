import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Tarjeta from './Tarjeta';
import './App.scss';
import request from './Api';

class Tablero extends Component {
  constructor(props) {
    super(props);
    this.state = { tarjetas: [] };
  }

  componentDidMount() {
    this.obtenerTablero();
  }

  obtenerTablero() {
    request(`/api/tablero/${this.props.match.params.id}`)
      .then(({ tablero }) => {
        this.setState({ tarjetas: tablero.tarjetas });
      })
      .catch(err => console.error(err));
  }

  descubrirTarjeta = (id) => {
    request(`/api/tarjeta/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ descubierta: true })
    })
      .then(() => {
        this.obtenerTablero();
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className={'tablero'}>
        {this.state.tarjetas.map((tarjeta) => <Tarjeta tarjeta={tarjeta} key={tarjeta.id}
                                                       descubrir={this.descubrirTarjeta}/>)}
      </div>
    );
  }
}

export default withRouter(Tablero);
