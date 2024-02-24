<script>
export default {
  props: {
    imgProductUrl: {
      type: String,
      required: true
    },
    product: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  methods: {}
}
</script>

<template>
  <div class="col">
    <div class="product">
      <div class="product__img-wrapper">
        <a class="product__link">
          <img :src="imgProductUrl" class="product__img" />
        </a>
      </div>
      <div class="product__love">
        <button class="product__love__btn">
          <font-awesome-icon icon="fa-solid fa-heart" class="product__love__icon" />
        </button>
        <div class="product__love__desc">Thêm yêu thích</div>
      </div>
      <div class="product__content">
        <a class="product__link">
          <h3 class="product__heading">{{ product.name }}</h3>
        </a>
        <p class="product__price">{{ product.price.toLocaleString('en-US') }} ₫</p>
        <button class="product__btn">THÊM VÀO GIỎ</button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.product {
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0 3px var(--divider-dark-2);
  border: 1px solid #cfcfcf;
  position: relative;
}

.product:hover .product__love__btn {
  border-color: var(--divider-dark-2);
}

.product:hover .product__love__btn .product__love__icon {
  color: var(--divider-dark-2);
}

.product__love {
  position: absolute;
  top: 2%;
  right: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product__love:hover .product__love__desc {
  display: block;
  animation: scaleOut 0.2s ease;
}

.product__love__btn {
  width: 40px;
  height: 40px;
  margin: 3px;
  background: none;
  border-radius: 50%;
  border: 1px solid transparent;
  cursor: pointer;
}

.product__love__btn:hover {
  border-color: red !important;
  background-color: red;
}

.product__love__btn:hover .product__love__icon {
  color: var(--white) !important;
}

.product__love__btn .product__love__icon {
  font-size: 1.4rem;
  color: transparent;
}

.product__love__desc {
  display: none;
  width: 46px;
  height: 70px;
  padding: 2px;
  margin-top: 5px;
  background-color: var(--blue-light);
  color: var(--text-light-1);
  font-size: 1rem;
  word-wrap: break-word;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  line-height: 1.3;
  transition: all 0.4s ease;
  overflow: hidden;
}
.product__img-wrapper {
  background-color: var(--white);
  aspect-ratio: 6/7;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product__link {
  height: 100%;
  text-decoration: none;
  color: #000;
  cursor: pointer;
}

.product__img {
  width: 100%;
}

.product__content {
  background-color: var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px;
}

.product__heading {
  margin: 0;
  font-size: 1.4rem;
}

.product__price {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--primary);
}

.product__btn {
  font-size: .9rem;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: var(--primary);
  color: var(--text-light-1);
  cursor: pointer;
}
.product__btn:hover {
  background-color: var(--primary-dark);
}
</style>
