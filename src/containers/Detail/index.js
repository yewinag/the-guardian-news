import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../components/Common';
import '../../styles/detail.css';
import { fetchData } from '../../utils';

const img = require('../../assets/peak-default.png');

function Detail() {
  const [loading, setloading] = useState(false);
  const [info, setInfo] = useState({});
  const { section, year, month, day, title } = useParams();

  useEffect(() => {
    setloading(true);
    fetchData(`/${section}/${year}/${month}/${day}/${title}?`).then((json) => {
      setInfo(json);
      setloading(false);
    });
  }, [section, year, month, day, title]);

  return (
    <article className="article">
      <header className="article-header app-container">
        <div className="article-header-action">
          <a href="search.html">
            <button className="btn" type="button">
              Add Bookmark
            </button>
          </a>
        </div>
      </header>
      {!!loading && info.content !== undefined ? (
        <Spinner />
      ) : (
        <article className="detail app-container">
          <section>
            <p className="date">
              {info.content && info.content.webPublicationDate}
            </p>
            <h2>{info.content && info.content.webTitle}</h2>
            <p />
            <p />
          </section>
          <section className="detail-col-2">
            <img src={img} alt="news detail images" />
            <p />
          </section>
        </article>
      )}
    </article>
  );
}

export default Detail;
