<script setup>
import HeaderSection from '../components/HeaderSection.vue'
import SliderSection from '../components/SliderSection.vue'
import TourList from '../components/TourList.vue'
import Banner from '../components/Banner.vue'
import Promotion from '../components/Promotion.vue'
import NewsSection from '../components/NewsSection.vue'
import RegisterMailSection from '../components/RegisterMail.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <HeaderSection />
  <SliderSection />
  <h2 class="heading">
    Chùm Tour Mới
    <font-awesome-icon class="heading__icon" icon="fa-brands fa-galactic-republic" />
  </h2>
  <TourList />
  <Banner />
  <Promotion :imgPromotionUrl="'src/assets/img/promotion-1.jpg'" :isRightPositon="true" />
  <NewsSection />
  <Promotion :imgPromotionUrl="'src/assets/img/promotion-2.jpg'" :isRightPositon="false" />
  <RegisterMailSection />
  <FooterSection />
</template>

<style lang="scss" scoped>
.heading {
  text-align: center;
  margin: 40px 0;
  .heading__icon {
    color: var(--livingCoral);
  }
}

.custom-tooltip {
  --bs-tooltip-bg: var(--bd-violet-bg);
  --bs-tooltip-color: var(--bs-white);
}
</style>
