<script>
export default {
  props: {
    imgPromotionUrl: {
      type: String,
      required: true
    },
    isRightPositon: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<template>
  <div
    class="promotion"
    :style="{
      backgroundImage: `url('${imgPromotionUrl}')`
    }"
  >
    <div class="container-xl">
      <div
        class="row align-items-center promotion__container"
        :class="{ 'justify-content-end': isRightPositon, 'justify-content-start': !isRightPositon }"
      >
        <div class="col-5 promotion__content">
          <h6 class="promotion__heading">Thông cáo báo chí</h6>
          <h5 class="promotion__title">
            MUA TOUR TẾT GIÁP THÌN, NHẬN ƯU ĐÃI LỚN TỪ “TUẦN LỄ VÀNG”
          </h5>
          <p class="promotion__text">
            Tết đang đến thật gần, du khách đừng bỏ lỡ cơ hội chốt tour để lên đường du xuân đến
            những nơi được khách Việt ưa chuộng nhất vào mỗi dịp Tết Nguyên đán.
          </p>
          <button class="promotion__btn">Xem ngay</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.promotion {
  height: 450px;
  margin: 60px 0;
  background: url('../assets/img/promotion-1.jpg') no-repeat center / cover fixed;
  .container-xl {
    height: 100%;
    .promotion__container {
      height: 100%;
      .promotion__content {
        padding: 20px;
        background-color: var(--ocean-blur);
        color: var(--white);
        border-radius: 10px;
        .promotion__heading {
          color: var(--marigold);
        }
        .promotion__heading,
        .promotion__title {
          text-transform: uppercase;
        }
        .promotion__btn {
          font-size: 0.9rem;
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
    }
  }
}
</style>
