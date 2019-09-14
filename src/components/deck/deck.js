import React from "react";

import Card from "./../card/card.js";

const Deck = props => {
  console.log(props.content.records[0].links);
  return (
    <>
      <header>
        <h2>{props.content.title}</h2>
      </header>
      {props.content.records.map(card => (
        <Card content={card} />
      ))}

      <nav className="links">
        <ul>
          {props.content.records[0].links.map((link, i) => (
            <li key={i}>
              <a className={link.type} href={link.href} title={link.title}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Deck;
