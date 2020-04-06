<template>
  <div>
    <div class="container">
      <h1>Nacelle Crewmember Assessment</h1>
      <div class="columns">
        <div
          class="column is-4 product"
          v-for="product in products"
          :key="product.id"
          @click="selectProduct"
        >
          <img :src="product.img" />
          <h3>{{ product.title }}</h3>
          <p>{{ product.price }}</p>
        </div>
      </div>
      <div class="columns">
        <h2>Selected Products</h2>
        <!-- ADD A COMPONENT TO VIEW SELECTED PRODUCTS HERE -->
      </div>
      <div class="columns">
        <h2>Total Value:</h2>
        <!-- CALCULATE TOTAL VALUE OF SELECTED PRODUCTS -->
      </div>
    </div>
  </div>
</template>

<script>
import productData from '~/static/products.js'
export default {
  data() {
    return {
      products: productData.products
    }
  },
  methods: {
    selectProducts() {}
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-size: 24pt;
  margin-bottom: 4rem;
}
.product {
  padding: 2rem;
  h3 {
    font-size: 18pt;
  }
}
</style>
