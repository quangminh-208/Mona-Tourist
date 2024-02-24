<script>
export default {
  props: {
    tour: {
      type: Object,
      default: function () {
        return null
      }
    }
  }
}
</script>

<template>
  <div class="col-4">
    <!-- Render when the tour has data (except error) -->
    <div class="tour" v-if="tour">
      <div class="tour__img-wrapper">
        <RouterLink :to="{ name: 'tour-detail', params: { id: tour.id } }" class="tour__link">
          <img :src="`/src/assets/img/${tour.imgs[0].url}`" class="tour__img" />
        </RouterLink>
      </div>
      <div class="tour__love">
        <button class="tour__love__btn">
          <font-awesome-icon icon="fa-solid fa-heart" class="tour__love__icon" />
        </button>
        <p class="tour__love__desc">Thêm yêu thích</p>
      </div>
      <span class="tour__category">Tour Nhật Bản</span>
      <div class="tour__content">
        <RouterLink :to="{ name: 'tour-detail', params: { id: tour.id } }" class="tour__link">
          <h5 class="tour__content__heading">
            {{ tour.title }}
          </h5>
        </RouterLink>
        <span class="tour__content__date">{{ tour.started_date }} - {{ tour.time }}</span>
        <span class="tour__content__place">Điểm khởi hành: {{ tour.started_place }}</span>
        <div class="tour__content__buying">
          <p class="tour__content__price">Giá: {{ tour.price.toLocaleString('en-US') }} ₫</p>
          <button class="tour__content__btn">Mua tour</button>
        </div>
        <span class="tour__content__quantity">Còn {{ tour.quantity }} tour</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tour {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 3px var(--divider-dark-2);
  border: 1px solid var(--gray-dove);
  border-radius: 10px;
  position: relative;
  &:hover .tour__love .tour__love__btn {
    border-color: var(--gray);
  }
  &:hover .tour__love .tour__love__btn .tour__love__icon {
    color: var(--gray);
  }

  .tour__img-wrapper {
    width: 100%;
    background-color: var(--white);
    aspect-ratio: 3/2;
    overflow: hidden;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    &:hover .tour__img {
      transform: scale(1.1);
    }
  }

  .tour__link {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }

  .tour__img {
    width: 100%;
    transition: all 0.5s ease;
  }

  .tour__love {
    position: absolute;
    top: 2%;
    left: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .tour__love__btn {
      width: 40px;
      height: 40px;
      margin: 3px;
      background: none;
      border-radius: 50%;
      border: 1px solid transparent;
      cursor: pointer;
      &:hover {
        border-color: red !important;
        background-color: red;
      }
      .tour__love__icon {
        font-size: 1.4rem;
        color: transparent;
      }
      &:hover .tour__love__icon {
        color: var(--white) !important;
      }
      &:hover ~ .tour__love__desc {
        display: block;
        animation: scaleOut 0.3s ease;
      }
    }

    .tour__love__desc {
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
      transition: all 0.3s ease;
      overflow: hidden;
    }
  }

  .tour__category {
    padding: 10px;
    background-color: var(--white);
  }

  .tour__content {
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 18px 18px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    .tour__content__heading {
      padding-bottom: 4px;
      font-size: 1.1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .tour__content__buying {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tour__content__price {
        margin: 0;
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--primary);
      }

      .tour__content__btn {
        font-size: 1rem;
        font-weight: bold;
        padding: 8px 12px;
        border: none;
        border-radius: 4px;
        background-color: var(--marigold);
        color: var(--text-light-1);
        cursor: pointer;
        &:hover {
          background-color: var(--marigold-dark);
        }
      }
    }

    .tour__content__quantity {
      margin-top: 10px;
      align-self: flex-end;
    }
  }
}
</style>
