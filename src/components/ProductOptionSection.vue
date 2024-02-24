<script>
import ProductList from '../components/ProductList.vue'

export default {
  components: {
    ProductList
  },
  data() {
    return {
      productOption: 'popularity'
    }
  }
}
</script>
<template>
  <div class="p-option__wrapper">
    <div class="p-option__head">
      <button class="p-option__head__btn" @click="productOption = 'popularity'">
        Sản phẩm phổ biến
      </button>
      <button class="p-option__head__btn" @click="productOption = 'sale'">
        Sản phẩm khuyến mại
      </button>
      <button class="p-option__head__btn" @click="productOption = 'new'">Sản phẩm mới</button>
    </div>
    <ProductList :number0fProduct="5" v-if="productOption === 'popularity'" />
    <ProductList :number0fProduct="7" v-if="productOption === 'sale'" />
    <ProductList :number0fProduct="8" v-if="productOption === 'new'" />
  </div>
</template>
<style lang="css" scoped>
.p-option__wrapper > input {
  display: none;
}

.p-option__head {
  margin: 16px 0;
  display: flex;
}

.p-option__head__btn {
  border: none;
  background: none;
  font-size: 2rem;
  font-weight: 500;
  margin-right: 36px;
  transition: all 0.4s ease;
}

.p-option__head__btn:hover {
  color: var(--primary);
}
</style>
