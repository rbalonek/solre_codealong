import React from "react";

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Bob",
    };
  }

  render() {
    return <img src={this.props.image} />;
  }
}

export default Image;
