import React from 'react';
import anonima from '../assets/anonima.jpg';

const Tarjeta = (props) => {
  return (
    <div className={`tarjeta ${props.tarjeta.descubierta ? props.tarjeta.agente : ''}`}
         onClick={() => props.descubrir(props.tarjeta.id)}>
      <div className={'borde'}>
        <div className={'superior'}>
          <div className={'palabra-chica'}>
            <p>{props.tarjeta.palabra}</p>
          </div>
          <img className={'anonimo'} src={anonima} alt={'silueta femenina'}/>
        </div>
        <p className={'palabra'}>{props.tarjeta.palabra}</p>
      </div>
    </div>
  );
};

export default Tarjeta;