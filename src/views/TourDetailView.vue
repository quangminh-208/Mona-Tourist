<script>
import HeaderSection from '../components/HeaderSection.vue'
import TourList from '../components/TourList.vue'
import TourDetail from '../components/TourDetail.vue'
import NewsSection from '../components/NewsSection.vue'
import RegisterMailSection from '../components/RegisterMail.vue'
import FooterSection from '../components/FooterSection.vue'

export default {
  components: {
    HeaderSection,
    TourList,
    TourDetail,
    NewsSection,
    RegisterMailSection,
    FooterSection
  },
  data() {
    return {
      tour: null
    }
  },
  created() {
    fetch('http://localhost:3000/tbl_tour/' + this.$route.params.id)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => (this.tour = data))
      .catch((error) => {
        console.log(`Could not fetch verse: ${error}`)
      })
  }
}
</script>

<template>
  <HeaderSection />
  <TourDetail :tour="tour" />
  <TourList />
  <FooterSection />
</template>

<style lang="scss" scoped></style>
