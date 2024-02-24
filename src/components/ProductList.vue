<script>
import ProductItem from './ProductItem.vue'

export default {
  components: {
    ProductItem
  },
  props: {
    number0fProduct: {
      type: Number
    },
    productList: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            name: 'Classico 1',
            price: 1000000
          },
          {
            id: 2,
            name: 'Classico 2',
            price: 900000
          },
          {
            id: 3,
            name: 'Sport 1',
            price: 750000
          },
          {
            id: 4,
            name: 'Casual 1',
            price: 480000
          },
          {
            id: 5,
            name: 'Casual 1',
            price: 480000
          },
          {
            id: 6,
            name: 'Casual 1',
            price: 480000
          },
          {
            id: 7,
            name: 'Casual 1',
            price: 480000
          },
          {
            id: 8,
            name: 'Casual 1',
            price: 480000
          },
          {
            id: 9,
            name: 'Casual 1',
            price: 480000
          },
          {
            id: 10,
            name: 'Casual 1',
            price: 480000
          },
          {
            id: 11,
            name: 'Casual 1',
            price: 480000
          },
          {
            id: 12,
            name: 'Casual 1',
            price: 480000
          }
        ]
      }
    }
  },
  data() {
    return {
      products: [],
      isRow: false
    }
  },
  mounted() {
    for (let i = 0; i < this.number0fProduct; i++) {
      this.products.push(this.productList[i])
    }
  },
  methods: {}
}
</script>

<template>
  <div class="row row-cols-5 g-5">
    <ProductItem
      v-for="(product, index) in products"
      :key="index"
      :imgProductUrl="`./src/assets/img/product-${product.id}.png`"
      :product="product"
    />
  </div>
</template>
