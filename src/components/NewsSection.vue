<script>
import NewItem from './NewItem.vue'

export default {
  components: {
    NewItem: NewItem
  },
  data() {
    return {}
  },
  props: {
    newsList: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            heading: '7 điều thú vị khi không thể bỏ qua khi đến Cao Bằng',
            content:
              'Cao Bằng có núi, rừng, sông, suối trải dài hùng vĩ, bao la, thiên nhiên còn nhiều nét hoang sơ, nguyên sinh và là điểm đến không thể thiếu trong các hành trình ...'
          },
          {
            id: 2,
            heading: 'Top 20 địa điểm du lịch Singapore nổi tiếng và hot nhất hiện nay',
            content:
              '“Đảo quốc sư tử" Singapore hiện đang là điểm đến lý tưởng của nhiều du khách. Nếu như bạn có ý định đến Singapore du lịch nhưng không biết nên tham quan, check-in địa điểm nào, thì sau đây sẽ là top những địa điểm du lịch Singapore nổi tiếng mà nhất định bạn không nên bỏ qua.'
          },
          {
            id: 3,
            heading: 'Cầu Vàng Đà Nẵng: điểm “sống ảo” cực ngầu',
            content:
              'Cầu Vàng (Golden Bridge), một công trình mới của Sun World Bà Nà Hills. Được khởi công xây dựng vào 07/2017 tới 04/2018 thì hoàn thành, thời gian gần đây đã đi vào hoạt động và đón những lượt khách tham quan du lịch Đà Nẵng đầu tiên.'
          }
        ]
      }
    }
  }
}
</script>

<template>
  <div class="container-xl">
    <div class="news__wrapper">
      <div class="row justify-content-evenly g-5">
        <NewItem
          v-for="(news, index) in this.newsList"
          :key="index"
          :imgNewUrl="`src/assets/img/new-${news.id}.jpg`"
          :news="news"
        />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.news__wrapper {
  margin: 80px 0;
}
</style>
