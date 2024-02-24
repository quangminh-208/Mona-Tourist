<template>
  <div class="container-xl banner">
    <div class="row">
      <div class="col-8 banner__pic banner__lg">
        <a class="web__link">
          <div class="banner__pic__overlay"></div>
          <img class="banner__pic__img banner__lg__img" src="../assets/img/banner-1.jpg" />
        </a>
      </div>
      <div class="col-4">
        <div class="row row-gap-3">
          <div class="col-12 banner__pic banner__sm">
            <a class="web__link">
              <div class="banner__pic__overlay"></div>
              <img class="banner__pic__img banner__sm__img" src="../assets/img/banner-2.jpg" />
            </a>
          </div>
          <div class="col-12 banner__pic banner__sm">
            <a class="web__link">
              <div class="banner__pic__overlay"></div>
              <img class="banner__pic__img banner__sm__img" src="../assets/img/banner-3.jpg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  margin-top: 60px;
  .banner__pic {
    &:hover .banner__pic__overlay{
      display: block;
    }
    .web__link {
      position: relative;
      display: block;
    }
    .banner__pic__overlay {
      position: absolute;
      display: none;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: var(--gray-dove);
      opacity: 0.2;
      transition: all .6s ease;
    }
    .banner__pic__img {
      width: 100%;
    }
  }
}
</style>
