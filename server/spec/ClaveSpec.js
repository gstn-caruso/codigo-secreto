const Clave = require('../src/clave');

const _ = require('lodash');

describe('Clave', () => {
  const clave = new Clave();

  it('contiene 25 casillas', () => {
    expect(clave.casillas.length).toBe(25);
  });

  it('contiene 1 casilla de asesino', () => {
    expect(_.countBy(clave.casillas, _.identity).asesino).toBe(1);
  });

  it('contiene 8 casillas de civiles', () => {
    expect(_.countBy(clave.casillas, _.identity).civil).toBe(7);
  });

  it('contiene un equipo inicial válido', () => {
    const posiblesEquiposIniciales = ['agenteRojo', 'agenteAzul'];
    expect(posiblesEquiposIniciales.includes(clave.agenteInicial)).toBeTrue();
  });

  describe('cuando el equipo inicial es rojo', () => {
    const clave = new Clave('agenteRojo');

    it('el equipo inicial es rojo', () => {
      expect(clave.agenteInicial).toBe('agenteRojo');
    });

    it('contiene 9 casillas de agentes rojos', () => {
      expect(_.countBy(clave.casillas, _.identity).agenteRojo).toBe(9);
    });

    it('contiene 8 casillas de agentes azules', () => {
      expect(_.countBy(clave.casillas, _.identity).agenteAzul).toBe(8);
    });
  });

  describe('cuando el equipo inicial es azul', () => {
    const clave = new Clave('agenteAzul');

    it('el equipo inicial es azul', () => {
      expect(clave.agenteInicial).toBe('agenteAzul');
    });

    it('contiene 9 casillas de agentes azules', () => {
      expect(_.countBy(clave.casillas, _.identity).agenteAzul).toBe(9);
    });

    it('contiene 8 casillas de agentes rojos', () => {
      expect(_.countBy(clave.casillas, _.identity).agenteRojo).toBe(8);
    });
  });
});

