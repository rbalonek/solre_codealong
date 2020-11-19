import React from "react";

class Image extends React.Component {
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

export default Image;
