import React from "react";

class Thumbnails extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Bob",
    };
  }

  render() {
    if (this.props.thumbnails.length < 2) {
      return null;
    } else {
      return (
        <ul id="product-thumbnails" class="thumbnails inline" data-hook>
          {this.props.thumbnails.map((thumbnail, index) => (
            <li key={index} className="tmb/all">
              <a href="javascript:;">
                <img src={thumbnail.mini_url} key={index}></img>
              </a>
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default Thumbnails;
