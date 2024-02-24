<script>
export default {
  props: {
    imgSlideUrl: {
      type: String,
      required: true
    },
    slide: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      isFirstSlide: false,
    }
  },
  methods: {
    onAddClass() {
      this.isFirstSlide = true
    }
  }
}
</script>

<template>
  <div class="slide" :class="{ 'first-slide': isFirstSlide }">
    <a>
      <img :src="`${imgSlideUrl}`" class="slide-img" />
    </a>
    <div class="container">
      <div class="slide__content">
        <p class="slide__content__subheading">{{ slide.subheading }}</p>
        <p class="slide__content__heading">{{ slide.heading }}</p>
        <p class="slide__content__text">
          {{ slide.content }}
        </p>
        <button class="slide__content__btn">Xem thêm</button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.slide {
  width: 100%;
  position: relative;
  transition: all 0.5s ease;
}

.slide-img {
  width: 100vw;
}

.slide__content {
  width: 100%;
  height: 100%;
  color: var(--text-light-1);
  text-shadow: 0 0 4px var(--gray);
  position: absolute;
  top: 0;
  transition: all 0.8s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slide__content__subheading {
  font-size: 2rem;
  font-weight: 500;
}

.slide__content__heading {
  font-size: 4rem;
  font-weight: 500;
  line-height: 1;
}

.slide__content__text {
  width: 40%;
  font-size: 1.2rem;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.slide__content__btn{
  width: 8rem;
  padding: 6px 0;
  font-size: 1.2rem;
  color: var(--text-light-1);
  border: none;
  border-radius: 6px;
  box-shadow: 0 0 4px var(--white);
  background-color: var(--marigold);
}

.slide__content__btn:hover {
  opacity: 0.85;
}
</style>
