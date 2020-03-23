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
    request(`/api/tablero/${this.props.match.params.id}`)
      .then(({ tablero }) => {
        this.setState({ tarjetas: tablero.tarjetas });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className={'tablero'}>
        {this.state.tarjetas.map(({ palabra, agente }) => <Tarjeta palabra={palabra} agente={agente} key={palabra}/>)}
      </div>
    );
  }
}

export default withRouter(Tablero);
