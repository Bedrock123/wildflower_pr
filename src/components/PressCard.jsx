import React from "react";

const PressCard = ({ article }) => (
  <a
    href={article.url}
    target="_blank"
    rel="noopener noreferrer"
    className="client-link"
  >
    <div className="client-object">
      {article.logo ? (
        <img className="press-logo" src={article.logo} alt={article.source} />
      ) : (
        <div style={{ height: "32px" }}>
          <br />
          <br />
        </div>
      )}
      <br />
      <div className="press-image-container">
        {article.image && (
          <img className="client-image" src={article.image} alt="" />
        )}
        <h3 className="press-title"> {article.title}</h3>
        <div className="press-image-overlay" />
      </div>
      <br />
    </div>
  </a>
);

export default PressCard;
