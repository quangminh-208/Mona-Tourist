<script>
export default {
  props: {
    tour: {
      type: Object,
      default: function () {
        return null
      }
    }
  },
  data() {
    return {
      infoStatus: 'default'
    }
  },
  methods: {
    onInfoToggle() {}
  }
}
</script>

<template>
  <div class="tour-detail_wrapper" v-if="tour">
    <div class="tour-detail__main-pic">
      <img class="tour-detail__main-pic__img" :src="`/src/assets/img/${tour.imgs[0].url}`" />
      <div class="container-xxl tour-detail__main-pic__title">
        <h3>{{ tour.title }}</h3>
      </div>
    </div>
    <div class="container-xxl tour-detail">
      <div class="row">
        <div class="col-6">
          <p>
            Thời gian: <span>{{ tour.time }}</span>
          </p>
        </div>
        <div class="col-6">
          <p>
            Phương tiện: <span>{{ tour.vehicle }}</span>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <p>
            Điểm xuất phát: <span>{{ tour.started_place }}</span>
          </p>
        </div>
        <div class="col-6">
          <p>
            Điểm đến: <span>{{ tour.vehicle }}</span>
          </p>
        </div>
      </div>
      <table class="table tour-detail__table align-middle">
        <thead>
          <tr>
            <th scope="col">Khởi hành</th>
            <th scope="col">Mã tour</th>
            <th scope="col">Giá</th>
            <th scope="col">Giá trẻ em</th>
            <th scope="col">Giá em bé</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">{{ tour.started_date }}</th>
            <th>{{ tour.id }}</th>
            <td>{{ tour.price.toLocaleString('en-US') }}</td>
            <td>{{ tour.kid_price.toLocaleString('en-US') }}</td>
            <td>{{ tour.baby_price.toLocaleString('en-US') }}</td>
            <td><button>Đặt chỗ</button></td>
          </tr>
        </tbody>
      </table>
      <div class="tour-detail__attraction">
        <p>Tour này có gì hay</p>
        <li v-for="item of tour.attraction">
          {{ item }}
        </li>
      </div>
      <button>In chương trình tour <font-awesome-icon icon="fa-solid fa-print" /></button>
      <div class="row row-gap-3">
        <div class="col-3" v-for="i in 4">
          <img :src="`/src/assets/img/${tour.imgs[i].url}`" style="width: 100%" />
        </div>
      </div>
      <button @click="infoStatus = 'default'">Chương trình Tour</button>
      <button @click="infoStatus = 'policy'">Chính sách Tour</button>
      <div v-for="day in tour.schedule" v-if="infoStatus == 'default'">
        <p>{{ day.title }}</p>
        <p>{{ day.content }}</p>
        <img :src="`/src/assets/img/${day.img_url}`" v-if="day.img_url" style="width: 100%" />
        <span>{{ day.img_title }}</span>
      </div>
      <div v-if="infoStatus == 'policy'">
        {{ tour.policy }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tour-detail_wrapper {
  .tour-detail__main-pic {
    height: 45vh;
    overflow: hidden;
    position: relative;
    display: flex;
    .tour-detail__main-pic__img {
      align-self: center;
      width: 100%;
    }
    .tour-detail__main-pic__title {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px 6px;
      text-align: center;
      color: var(--text-light-1);
      background-color: var(--black-transparent);
      border-radius: 6px;
    }
  }
}
</style>
