import React, { Component } from 'react';
import './App.scss';
import Tarjeta from './Tarjeta';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tarjetas: [] };
  }

  componentDidMount() {
    this.callApi('/api/tablero')
      .then((tarjetas) => {
        this.setState({ tarjetas: tarjetas });
      })
      .catch(console.error);
  }

  callApi = async (ruta) => {
    const resp = await fetch(ruta);
    window._resp = resp;
    let text = await resp.text();
    let data = null;
    try {
      data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
    } catch (e) {
      console.err(`Invalid json\n${e}`);
    }

    if (resp.status !== 200) {
      throw Error(data ? data.message : 'No data');
    }

    return data;
  };

  render() {
    return (
      <div className="App">
        <div className={'tablero'}>
          {this.state.tarjetas.map(({ palabra, agente }) => <Tarjeta palabra={palabra} agente={agente} key={palabra}/>)}
        </div>
      </div>
    );
  }
}

export default App;
