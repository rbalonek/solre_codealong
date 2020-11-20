import React from "react";

class CartForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Bob",
    };
  }

  render() {
    return (
      <div
        id="inside-product-cart-form"
        data-hook="inside_product_cart_form"
        itemprop="offers"
        itemscope
        itemtype="http://schema.org/Offer"
      >
        <div data-hook="product_price" className="columns five alpha">
          <div id="product-price">
            <h6 className="product-section-title">Price</h6>
            <div>
              <span className="price selling" itemprop="price">
                ${this.props.price}
              </span>
              <span itemprop="priceCurrency"></span>
            </div>
          </div>

          <div className="add-to-cart">
            <form action="/orders/populate" method="post">
              <input
                type="number"
                className="title"
                name="quantity"
                min={1}
                defaultValue={1}
              />
              <input type="hidden" name="variant_id" value={this.props.id} />
              <button
                className="large primary"
                id="add-to-cart-button"
                type="submit"
              >
                Add To Cart
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CartForm;
