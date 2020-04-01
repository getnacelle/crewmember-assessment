import React from 'react'

const Homepage = () => (
  <>
    <div class="container">
      <h1>Nacelle Crewmember Assessment</h1>
      <div class="columns">
        <div class="column is-4 product">
          <img src={product.img} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      </div>
      <div class="columns">
        <h2>Selected Products</h2>
        {/* ADD A COMPONENT TO VIEW SELECTED PRODUCTS HERE */}
      </div>
      <div class="columns">
        <h2>Total Value:</h2>
        {/* CALCULATE TOTAL VALUE OF SELECTED PRODUCTS */}
      </div>
    </div>
  </>
)

export default Homepage
