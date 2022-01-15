import React from 'react';
import '../../styles/detail.css';

const img = require('../../assets/peak-default.png');

function Detail() {
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
      <article className="detail app-container">
        <section>
          <p className="date">FRI 12 JUN 2020 06.40 BST</p>
          <h2>
            Global report: WHO says Covid-19 may never go away and warns of
            mental health crisis
          </h2>
          <h4>
            Trump brands Fauci’s caution over reopening ‘unacceptable’; Russia
            has second highest infections; Japan eyes lifting national emergency
          </h4>
          <p>
            The World Health Organisation has warned that coronavirus “may never
            go away” as its experts predicted that a global mental health crisis
            caused by the pandemic was looming.{' '}
          </p>
          <p>
            Meanwhile, the US Treasury Secretary, Steven Mnuchin, cautioned that
            waiting too long to reopen the economy risked severe economic damage
            “and the health impact that that creates”.
          </p>
          <p>
            The World Health Organisation has warned that coronavirus “may never
            go away” as its experts predicted that a global mental health crisis
            caused by the pandemic was looming.{' '}
          </p>
          <p>
            The apparently widening gap between the two men came on a day of
            more sobering economic warnings, with the head of the Federal
            Reserve, Jerome Powell, predicting of a “significantly worse” US
            recession than any downturn since the second world war, with record
            job losses and worse ahead.{' '}
          </p>
          <p>
            The World Health Organisation has warned that coronavirus “may never
            go away” as its experts predicted that a global mental health crisis
            caused by the pandemic was looming.{' '}
          </p>
          <p>
            The statements came as Russia became the nation with the second
            highest number of infections at 242,271, behind the US with just
            under 1.4 million. The official death toll in Russia is 2,212,
            although authorities ascribed the deaths of more than 60% of
            coronavirus patients in April to other causes. Moscow, the centre of
            the country’s outbreak, accounted for 1,232 of those deaths. Tatyana
            Golikova, Russia’s health minister, denied any falsification of the
            statistics.
          </p>
          <p>
            A report by the WHO’s mental health department to the UN warned of
            another looming crisis: “The isolation, the fear, the uncertainty,
            the economic turmoil – they all cause or could cause psychological
            distress,” said the department’s director, Devora Kestel. She said
            the world could expect to see an upsurge in the severity of mental
            illness, including amongst children, young people and healthcare
            workers.
          </p>
        </section>
        <section className="detail-col-2">
          <img src={img} alt="news detail images" />
          <p>
            Global infections from the virus reached nearly 4.36 million, with
            deaths approaching 300,000.
          </p>
        </section>
      </article>
    </article>
  );
}

export default Detail;
