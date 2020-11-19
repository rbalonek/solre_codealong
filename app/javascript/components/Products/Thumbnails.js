import React from "react";

class Thumbnails extends React.Component {
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

export default Thumbnails;
