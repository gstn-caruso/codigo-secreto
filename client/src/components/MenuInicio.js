import React from 'react';

class MenuInicio extends React.Component {

  constructor(props) {
    super(props);
    this.state = { juegoElegido: null };
  }

  handleChange = (event) => this.setState({ juegoElegido: event.target.value });

  render() {
    return <>
      <button onClick={this.props.nuevoJuego}>Crear nuevo juego</button>
      <input type="text" onChange={this.handleChange}/>
      <button onClick={() => this.props.entrarJuego(this.state.juegoElegido)}>Entrar</button>
    </>;
  }
}

export default MenuInicio;