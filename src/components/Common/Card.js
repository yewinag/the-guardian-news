import React from 'react';
import '../../styles/card.css';

const img = require('../../assets/peak-default.png');

function Card({ item }) {
  return (
    <section className={`item-${'1'}`}>
      <div className="thumb" style={{ backgroundImage: `url(${img})` }} />
      <article className="desc">
        <h4>{item.webTitle}</h4>
        <p>{item.body}</p>
      </article>
    </section>
  );
}

export default Card;
