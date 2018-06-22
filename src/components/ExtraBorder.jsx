import React from "react";

class ExtraBorder extends React.Component {
  render() {
    return (
      <div>
        <div className="side-border-left" />
        <div className="side-border-right" />
        <div className="side-border-top" />
        <div className="side-border-bottom" />
      </div>
    );
  }
}

export default ExtraBorder;
