<script>
import TourItem from './TourItem.vue'

export default {
  components: {
    TourItem
  },
  props: {
    number0fTour: {
      type: Number
    }
  },
  data() {
    return {
      tours: []
    }
  },
  created() {
    fetch('http://localhost:3000/tbl_tour')
      .then((response) => response.json())
      .then((data) => (this.tours = data))
  }
}
</script>

<template>
  <div class="container-xl">
    <div class="tour__list">
      <div class="row g-6" v-if="tours">
        <TourItem v-for="tour in tours" :key="tour.id" :tour="tour" />
      </div>
      <div v-else>
        <h5 style="text-align: center">Cannot loading tour because of error server...</h5>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tour__list {
  margin: 24px 0;
}
</style>
