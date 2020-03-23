const _ = require('lodash');

module.exports = class Clave {

  casillas;
  agenteInicial;

  constructor(agenteInicial) {
    this.agenteInicial = agenteInicial ? agenteInicial : _.shuffle(this.posiblesAgentes())[0];

    let x = _.range(25);
    _.fill(x, 'asesino', 0, 1);
    _.fill(x, this.agenteInicial, 1, 10);
    _.fill(x, this.agenteEnemigoDe(this.agenteInicial), 10, 18);

    _.fill(x, 'civil', 18, 25);
    this.casillas = _.shuffle(x);
  }

  posiblesAgentes = () => ['agenteRojo', 'agenteAzul'];

  agenteEnemigoDe = unAgente => unAgente === 'agenteRojo' ? 'agenteAzul' : 'agenteRojo';
};
