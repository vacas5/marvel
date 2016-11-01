import React from 'react';
import oval from './oval.svg';
import './Loader.scss';

export default function Loader() {
  return (
    <div className="loader">
      <img className="spin" src={oval} alt="Depicts something in progress" />
    </div>
  );
};
