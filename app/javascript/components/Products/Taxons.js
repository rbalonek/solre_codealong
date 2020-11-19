import React from "react";

class Taxons extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Bob",
    };
  }

  render() {
    return <div>Hi, {this.state.name}!</div>;
  }
}

export default Taxons;
