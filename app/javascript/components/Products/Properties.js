import React from "react";

class Properties extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Loading...",
    };
  }

  render() {
    if (this.props.properties.length == 0) {
      return null;
    } else {
      return (
        <>
          <h6 class="product-section-title">Properties:</h6>
          <table id="product-properties" className="table-display" data-hook>
            <tbody>
              {this.props.properties.map((property, index) => (
                <tr className={index % 2 == 0 ? "even" : "odd"}>
                  <td>
                    <strong>{property.property_name}</strong>
                  </td>
                  <td>{property.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }
  }
}

export default Properties;
