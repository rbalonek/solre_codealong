import React from "react";
import CartForm from "./CartForm";
import Image from "./Image";
import Properties from "./Properties";
import Taxons from "./Taxons";
import Thumbnails from "./Thumbnails";

class Show extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Loading... ",
      description: "",
      path: window.location.pathname,
      taxons: [],
      properties: [],
      image: "",
      thumbnails: [],
      id: 0,
      price: "",
    };
  }

  getProduct = () => {
    fetch("/api" + this.state.path)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          name: response.name,
          description: response.description,
          taxons: response.classifications.map(
            (classification) => classification.taxon
          ),
          properties: response.product_properties,
          image: response.master.images[0].product_url,
          thumbnails: response.master.images.map((image) => ({
            id: image.id,
            mini_url: image.mini_url,
            product_url: image.product_url,
          })),
          id: response.id,
          price: response.price,
        });
      });
  };

  changeImage = (id) => {
    var thumbnail = this.state.thumbnails.filter((image) => image.id == id)[0];
    this.setState({ image: thumbnail.product_url });
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    return (
      <div
        data-hook="product_show"
        itemscope
        itemtype="http://schema.org/Product"
      >
        <div className="columns six alpha" data-hook="product_left_part">
          <div className="row" data-hook="product_left_part_wrap">
            <div id="product-images" data-hook="product_images">
              <div id="main-image" data-hook>
                <Image image={this.state.image} />
              </div>
              <div id="thumbnails" data-hook>
                <Thumbnails
                  thumbnails={this.state.thumbnails}
                  changeImage={this.changeImage}
                />
              </div>
            </div>

            <div data-hook="product_properties">
              <Properties properties={this.state.properties} />
            </div>
          </div>
        </div>

        <div className="columns ten omega" data-hook="product_right_part">
          <div className="row" data-hook="product_right_part_wrap">
            <div id="product-description" data-hook="product_description">
              <h1 className="product-title" itemprop="name">
                {this.state.name}
              </h1>

              <div itemprop="description" data-hook="description">
                {this.state.description}
              </div>

              <div id="cart-form" data-hook="cart_form">
                <CartForm id={this.state.id} price={this.state.price} />
              </div>
            </div>

            <Taxons taxons={this.state.taxons} />
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
