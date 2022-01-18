import React from 'react';

function LoadMore({ handleLoadMore, meta }) {
  return (
    <section
      role="presentation"
      className="item-1"
      onClick={() => handleLoadMore()}
    >
      <article className="desc">
        <h4>Load More</h4>
        <p>{`for ${meta.total} news`}</p>
      </article>
    </section>
  );
}

export default LoadMore;
