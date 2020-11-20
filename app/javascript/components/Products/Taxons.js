import React from "react";

class Taxons extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Loading...",
    };
  }

  render() {
    if (this.props.taxons.length === 0) {
      return null;
    } else {
      return (
        <div id="taxon-crumbs" data-hook class="alpha columns five omega">
          <h6 class="product-section-title">Look For Similar Items</h6>

          <div data-hook="product_taxons">
            <ul id="similar_items_by_taxon" data-hook>
              {this.props.taxons.map((taxon, index) => (
                <li>
                  <a href={"/t/" + taxon.permalink}>{taxon.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}
export default Taxons;
