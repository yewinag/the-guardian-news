import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/card.css';

const img = require('../../assets/peak-default.png');

function Card({ item, imageClass }) {
  return (
    <Link to="detail">
      <section className="item-1">
        <div
          className={imageClass}
          style={{ backgroundImage: `url(${img})` }}
        />
        <article className="desc">
          <h4>{item.webTitle}</h4>
          <p>{item.body}</p>
        </article>
      </section>
    </Link>
  );
}

export default Card;
