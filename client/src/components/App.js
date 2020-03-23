import React, { Component } from 'react';
import './App.scss';
import Tarjeta from './Tarjeta';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palabras: [] };
  }

  componentDidMount() {
    this.callApi('/api/palabras')
      .then(({ palabras }) => {
        this.setState({ palabras: palabras });
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
          {this.state.palabras.map((palabra) => <Tarjeta palabra={palabra}/>)}
        </div>
      </div>
    );
  }
}

export default App;
