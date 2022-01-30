import React from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, AddBookMarkBtn } from '../../components/Common';
import { useFetchDetail } from '../../hooks';
import '../../styles/detail.css';

function Detail() {
  const { section, year, month, day, title } = useParams();
  const [info, fetching] = useFetchDetail(
    `/${section}/${year}/${month}/${day}/${title}`
  );
  function getbody(text) {
    return { __html: text };
  }
  return (
    <article className="article">
      <header className="article-header app-container">
        <div className="article-header-action">
          {info.content && <AddBookMarkBtn item={info} />}
        </div>
      </header>
      {!!fetching && info.content !== undefined ? (
        <Spinner />
      ) : (
        <article className="detail app-container">
          <section>
            <p className="date">
              {info.content && info.content.webPublicationDate}
            </p>
            <h2>{info.content && info.content.webTitle}</h2>
            <h3>{info.content && info.content.fields.headline}</h3>
            {/* eslint-disable */}
            <div
              dangerouslySetInnerHTML={getbody(
                info.content && info.content.fields.body
              )}
            />
            <p />
          </section>
          <section className="detail-col-2">
            <p />
          </section>
        </article>
      )}
    </article>
  );
}

export default Detail;
