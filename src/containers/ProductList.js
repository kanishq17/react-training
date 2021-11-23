import React from 'react';
import Product from '../components/Product';
import { getProducts } from '../services/ProductService';

class ProductList extends React.Component {
  state = { plist: [], hasError: false };

  componentDidMount() {
    this.getData();
  }

  getData() {
    getProducts()
      .then((res) => {
        console.log('Response', res.data);
        this.setState({ plist: res.data });
      })
      .catch((err) => {
        console.log('Error', err);
        this.setState({ hasError: true });
      });
  }

  render() {
    return (
      <div>
        {this.state.plist.map((item, index) => (
          <Product
            data={item}
            key={item.productId}
            wishlist={true}
            btnClick={(data) => console.log('Added to Cart ' + data)}
          />
        ))}
      </div>
    );
  }
}
export default ProductList;
