import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class ProductItem extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
  }

  handleAddToCartClick = (e) => {
    const { id } = this.props;
    this.props.addToCart(id);
  }

  render() {

    const {
      name,
      price,
      quantity,
    } = this.props;

    return (
      <div className="product">

        <div className="product-content">
          <div className="product-name">{name}</div>
          <div className="product-details">remaining in stock : {quantity}</div>
        </div>
        <div className="product-highlight">{price} €</div>

        <div className="product-actions">
          <Button
            onClick={this.handleAddToCartClick}
            disabled={!quantity}
            >
            Add to cart
          </Button>
        </div>
      </div>
    );
  }

}

export default ProductItem;
