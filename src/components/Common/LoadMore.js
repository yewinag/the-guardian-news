import React from 'react';
import '../../styles/loadmore.css';

const rightIcon = require('../../assets/right-icon.png');

function LoadMore({ handleLoadMore, meta }) {
  return (
    <section
      role="presentation"
      className="item-1 loadmore"
      onClick={() => handleLoadMore()}
    >
      <article className="desc">
        <h4>
          Load More
          <img src={rightIcon} alt="load more right icon" />
        </h4>

        <p>{`for ${meta.total} news`}</p>
      </article>
    </section>
  );
}

export default LoadMore;
