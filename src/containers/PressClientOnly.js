import React from "react";
import PressCard from "../components/PressCard";
import pressClients from "../data/press";

class PressClientOnly extends React.Component {
  render() {
    var slug = this.props.match.params.clientName;
    var pressClient = pressClients.find((client) => client.slug === slug);

    return (
      <div className="home-wrapper company-listings client-only">
        {pressClient && (
          <div>
            <h2> {pressClient.name} </h2>
            <br />
            <div className="client-press-container-thing">
              {pressClient.articles.map((article, idx) => (
                <div className="client-press-peice" key={article.url + idx}>
                  <PressCard article={article} />
                </div>
              ))}
            </div>
            <br />
          </div>
        )}
      </div>
    );
  }
}

export default PressClientOnly;
