const _ = require('lodash');

const palabras = () => {
  const palabras = require('./palabras.json');
  const palabrasRandom = _.shuffle(palabras.palabras);
  return { palabras: _.take(palabrasRandom, 25) };
};

exports.palabras = palabras;