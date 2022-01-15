import React from 'react';
import '../../styles/card.css';

const img = require('../../assets/peak-default.png');

function Card() {
  return (
    <section className="item-1">
      <div className="thumb" style={{ backgroundImage: `url(${img})` }} />
      <article className="desc">
        <h4>Australia news live update: 50 Covid deaths</h4>
        <p>
          Australia news live update: 50 Covid deaths and 4,100 in hospital
          nationally; NSW cases expected to ‘plateau’ next week; Djokovic visa
          decision looms
        </p>
      </article>
    </section>
  );
}

export default Card;
