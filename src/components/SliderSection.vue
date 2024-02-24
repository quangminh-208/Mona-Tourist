<script>
import SlideItem from './SlideItem.vue'

export default {
  components: {
    SlideItem
  },
  props: {
    slideList: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            subheading: 'Nổi bật tết dương lịch',
            heading: 'Hạ Long',
            content: 'Khởi hành 01/01/2024'
          },
          {
            id: 2,
            subheading: 'Ưu dãi giá sốc',
            heading: 'Đền Angkor Thom',
            content: 'Khởi hành 14/02/2024'
          },
          {
            id: 3,
            subheading: 'Khám phá, thám hiểm',
            heading: 'Cao Bằng',
            content: 'Khởi hành 24/12/2023'
          }
        ]
      }
    }
  },
  data() {
    return {
      slide_index: 2,
      slideChecked: 1
    }
  },
  mounted() {
    // Create an interval that executes the 'autoSlide' function every 4 seconds
    this.$refs.slideRef[0].onAddClass()
    this.intervalId = setInterval(this.nextSlide, 4000)
  },
  beforeUnmount() {
    // Clear the interval when the component is destroyed
    clearInterval(this.intervalId)
  },
  methods: {
    backSlide() {
      this.slideChecked = this.slide_index
      this.slide_index--
      if (this.slide_index < 1) this.slide_index = 3
    },
    nextSlide() {
      this.slideChecked = this.slide_index
      this.slide_index++
      if (this.slide_index > 3) this.slide_index = 1
    }
  }
}
</script>

<template>
  <div class="slider-wrapper">
    <div class="slider__main">
      <input type="radio" name="slider-radio-btn" id="radio1" :checked="slideChecked === 1" />
      <input type="radio" name="slider-radio-btn" id="radio2" :checked="slideChecked === 2" />
      <input type="radio" name="slider-radio-btn" id="radio3" :checked="slideChecked === 3" />
      <SlideItem
        ref="slideRef"
        v-for="(slide, index) in this.slideList"
        :key="index"
        :imgSlideUrl="`./src/assets/img/slide-${slide.id}.jpg`"
        :slide="slide"
      />
      <div class="slider__nav-manual">
        <label for="radio1" class="slider__nav-manual__btn slider__nav-manual__btn1"></label>
        <label for="radio2" class="slider__nav-manual__btn slider__nav-manual__btn2"></label>
        <label for="radio3" class="slider__nav-manual__btn slider__nav-manual__btn3"></label>
      </div>
    </div>
    <div class="slider__btn__wrapper slider__btn__wrapper-left" @click="backSlide">
      <button class="slider__btn slider__btn-left">
        <font-awesome-icon icon="fa-solid fa-angle-up" rotation="270" />
      </button>
    </div>
    <div class="slider__btn__wrapper slider__btn__wrapper-right" @click="nextSlide">
      <button class="slider__btn slider__btn-right">
        <font-awesome-icon icon="fa-solid fa-angle-up" rotation="90" />
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.slider-wrapper {
  background-color: var(--black--soft);
  width: 100%;
  aspect-ratio: 19 / 6.4;
  position: relative;
  display: flex;
  overflow: hidden;
}

.slider-wrapper:hover .slider__btn {
  display: block;
}

.slider-wrapper:hover .slider__btn__wrapper-left {
  background-image: linear-gradient(to right, var(--gray-fog), var(--transparent));
}

.slider-wrapper:hover .slider__btn__wrapper-right {
  background-image: linear-gradient(to left, var(--gray-fog), var(--transparent));
}

.slider-wrapper:hover .slider__btn-left {
  animation: moveLeftShort 0.3s linear;
}

.slider-wrapper:hover .slider__btn-right {
  animation: moveRightShort 0.3s linear;
}

.slider-wrapper input {
  display: none;
}

.slider__main {
  width: 100%;
  display: flex;
}
.slider__btn__wrapper {
  height: 100%;
  position: absolute;
  top: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.slider__btn__wrapper-left {
  left: 0;
}

.slider__btn__wrapper-right {
  right: 0;
}

.slider__btn {
  width: 40px;
  aspect-ratio: 1/1;
  background: none;
  border-radius: 50%;
  border: 1px solid var(--white);
  color: var(--white);
  font-size: 1.2rem;
  margin: 0 24px;
  display: none;
  transition: all 0.2s ease;
  cursor: pointer;
  box-sizing: border-box;
}

.slider__btn__wrapper-left:hover .slider__btn,
.slider__btn__wrapper-right:hover .slider__btn {
  background-color: var(--primary);
  border: none;
}

.slider__nav-manual {
  width: 100%;
  position: absolute;
  bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider__nav-manual__btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--gray-dove);
  opacity: 0.7;
  transition: all 0.5s ease;
  cursor: pointer;
}

.slider__nav-manual__btn:hover {
  background-color: var(--white);
  opacity: 1;
}

.slider__nav-manual__btn:not(:last-child) {
  margin-right: 8px;
}

#radio1:checked ~ .first-slide {
  margin-left: 0;
}

#radio2:checked ~ .first-slide {
  margin-left: -100%;
}

#radio3:checked ~ .first-slide {
  margin-left: -200%;
}

#radio1:checked ~ .slider__nav-manual .slider__nav-manual__btn1,
#radio2:checked ~ .slider__nav-manual .slider__nav-manual__btn2,
#radio3:checked ~ .slider__nav-manual .slider__nav-manual__btn3 {
  background-color: var(--white);
  opacity: 1; 
  width: 18px;
  height: 18px;
} 
</style>
