import React from 'react';

class Product extends React.Component {
  renderStock() {
    if (this.props.data.productStcok) {
      return <button> ADD to cart</button>;
    } else {
      return <button> Notify me</button>;
    }
  }
  render() {
    const data = this.props.data;

    return (
      <div>
        <img src={data.productImage} />
        <h3>{data.productName}</h3>
        <h4>{data.productPrice}</h4>
        <button onClick={() => this.props.btnClick(data.productName)}>
          Add to {this.props.wishlist ? 'WishList' : 'Cart'}
        </button>
        {this.renderStock()}
      </div>
    );
  }
}

export default Product;
