import React from 'react';
import productData from '../../static/products';
import './styles.scss';

const { products } = productData;

export default () => {
  const productList = products.map(
    // TURN THIS INTO A SEPARATE COMPONENT
    (product) => (
      <div className="column is-4 product" key={product.id}>
        <img src={product.img} alt={product.altText} />
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    )
  );
  return (
    <>
      <div className="container">
        <h1>Nacelle Crewmember Assessment</h1>
        <div className="columns">
          {productList}
        </div>
        <div className="columns">
          <h2>Selected Products</h2>
          {/* ADD A COMPONENT TO VIEW SELECTED PRODUCTS HERE */}
        </div>
        <div className="columns">
          <h2>Total Value:</h2>
          {/* CALCULATE TOTAL VALUE OF SELECTED PRODUCTS */}
        </div>
      </div>
    </>
  );
};
