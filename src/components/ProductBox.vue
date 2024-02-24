<template>
  <div class="container-xl">
    <div class="pbox">
      <div class="row justify-content-evenly">
        <div class="col-6 l-6 m-6 c-12">
          <div class="pbox__item">
            <a>
              <div class="pbox__item__bg pbox__item__bg1"></div>
            </a>
            <div class="pbox__item__content">
              <p class="pbox__item__title pbox__item__title--separate">Xu hướng 2023</p>
              <p class="pbox__item__heading">ĐỒNG HỒ NAM</p>
            </div>
          </div>  
        </div>
        <div class="col-6 l-6 m-6 c-12">
          <div class="pbox__item">
            <a>
              <div class="pbox__item__bg pbox__item__bg2"></div>
            </a>
            <div class="pbox__item__content">
              <p class="pbox__item__title pbox__item__title--separate">Xu hướng 2023</p>
              <p class="pbox__item__heading">ĐỒNG HỒ NỮ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.pbox {
  margin: 44px 0;
}

.pbox__item {
  margin-top: 16px;
  width: 100%;
  aspect-ratio: 2/1;
  position: relative;
  overflow: hidden;
}

.pbox__item:hover .pbox__item__bg {
  transform: scale(1.1);
}

.pbox__item__bg {
  width: 100%;      
  height: 100%;
  transition: all 0.5s ease;
}

.pbox__item__bg1 {
  background: url('@/assets/img/trend-1.jpg') no-repeat center / cover;
}

.pbox__item__bg2 {
  background: url('@/assets/img/trend-2.jpg') no-repeat center / cover;
}

.pbox__item__content {
  color: var(--text-light-1);
  font-size: 1.6rem;
  position: absolute;
  top: 30%;
  left: 5%;
}

.pbox__item__heading {
  font-size: 3rem;
  font-weight: 600;
}

.pbox__item__title--separate::after {
  content: '';
  width: 80px;
  border: 1px solid var(--primary);
  display: block;
  position: absolute;
  top: 35%;
}
</style>
