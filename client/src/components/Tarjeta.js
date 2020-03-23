import React from 'react';
import anonima from '../assets/anonima.jpg';

const Tarjeta = props => <div className={`tarjeta ${props.agente}`}>
  <div className={'borde'}>
    <div className={'superior'}>
      <div className={'palabra-chica'}>
        <p>{props.palabra}</p>
      </div>
      <img className={'anonimo'} src={anonima} alt={'silueta femenina'}/>
    </div>
    <p className={'palabra'}>{props.palabra}</p>
  </div>
</div>;

export default Tarjeta;