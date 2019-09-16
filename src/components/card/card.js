import React from "react";

const Card = props => {
  return (
    <>
      <header>
        <h3>{props.content.title}</h3>
      </header>
      <div className="content">{props.content.copy}</div>
      <figure>
        <img src={props.content.media.href} alt={props.content.media.alt} />
        <figcaption>{props.content.media.title}</figcaption>
      </figure>
    </>
  );
};

export default Card;
