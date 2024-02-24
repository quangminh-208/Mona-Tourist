<script>
export default {
  props: {
    imgNewUrl: {
      type: String,
      required: true
    },
    news: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>
<template>
  <div class="col-4">
    <div class="news__item">
      <a class="news__link">
        <div class="news__item__img">
          <div
            class="news__item__bg"
            :style="{
              backgroundImage: `url('${imgNewUrl}')`
            }"
          ></div>
        </div>
        <div class="news__content">
          <p class="news__heading">{{ news.heading }}</p>
          <p class="news__desc">{{ news.content }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="css" scoped>
.news__item {
  box-shadow: 1px 1px 5px var(--divider-dark-1);
  background-color: var(--color-background);
  border-radius: 4px;
}

.news__item:hover .news__item__bg {
  transform: scale(1.1);
}

.news__link {
  text-decoration: none;
  color: var(--black-text);
  cursor: pointer;
}

.news__item__img {
  width: 100%;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  aspect-ratio: 6/4;
  overflow: hidden;
}

.news__item__bg {
  width: 100%;
  height: 100%;
  background: no-repeat center / cover;
  transition: all 0.6s ease;
}

.news__img {
  width: 100%;
}

.news__content {
  padding: 12px 10px 2px;
}

.news__heading {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.news__heading:hover {
  color: var(--primary);
}

.news__desc {
  font-size: 0.9rem;
  color: var(--text-dark-1);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
