<script>
// Header menu sticky
window.onscroll = function () {
  if (window.scrollY >= 104) {
    document.querySelector('.header__menu__wrapper').classList.add('fixed-header')
  } else document.querySelector('.header__menu__wrapper').classList.remove('fixed-header')
}
</script>

<template>
  <div id="header">
    <!-- Header navbar -->
    <div class="header__navbar">
      <div class="container-xl">
        <ul class="header__navbar__list">
          <li class="header__navbar__item">
            <RouterLink to="" class="header__navbar__item__link">
              <font-awesome-icon class="header__navbar__icon" icon="fa-solid fa-location-dot" />
              Minh Khai, Bắc Từ Liêm, Hà Nội
            </RouterLink>
          </li>
          <li class="header__navbar__item">
            <a href="tel:19001900" class="header__navbar__item__link">
              <font-awesome-icon class="header__navbar__icon" icon="fa-solid fa-phone" />
              1900 1900
            </a>
          </li>
          <li class="header__navbar__item">
            <RouterLink to="" class="header__navbar__item__link">
              <font-awesome-icon class="header__navbar__icon" icon="fa-brands fa-square-facebook" />
            </RouterLink>
            <RouterLink to="" class="header__navbar__item__link">
              <font-awesome-icon class="header__navbar__icon" icon="fa-brands fa-instagram" />
            </RouterLink>
            <RouterLink to="" class="header__navbar__item__link">
              <font-awesome-icon class="header__navbar__icon" icon="fa-brands fa-youtube" />
            </RouterLink>
          </li>
        </ul>

        <ul class="header__navbar__list">
          <li class="header__navbar__item header__navbar__item--separate">
            <RouterLink to="" class="header__navbar__item__link header__navbar__item__link--strong">
              Đăng ký
            </RouterLink>
          </li>
          <li class="header__navbar__item">
            <RouterLink to="" class="header__navbar__item__link header__navbar__item__link--strong">
              Đăng nhập
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Header main -->
    <div class="header__main">
      <div class="container-xl">
        <RouterLink to="/" class="router-link">
          <img
            src="../assets/img/logo.png"
            alt="Logo Mona Tourist"
            class="header__main__logo__img"
          />
        </RouterLink>

        <div class="header__main__search">
          <input type="text" class="header__main__search-box" placeholder="Tìm kiếm..." />
          <button class="header__main__search-btn">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
        <ul class="header__main__list">
          <li class="header__main__option">
            <RouterLink to="" class="header__main__option__link">
              <font-awesome-icon class="header__main-icon" icon="fa-solid fa-heart" />
            </RouterLink>
          </li>
          <li class="header__main__option">
            <RouterLink to="" class="header__main__option__link">
              <font-awesome-icon class="header__main-icon" icon="fa-solid fa-user" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Header menu -->
    <div class="header__menu__wrapper hide-on-mobile">
      <div class="header__menu container-xxl">
        <ul class="header__menu__list">
          <li class="header__menu__item">
            <RouterLink to="/" class="header__menu__item__link"> Trang chủ </RouterLink>
          </li>
          <li class="header__menu__item">
            <RouterLink to="" class="header__menu__item__link"> Tour trong nước </RouterLink>
          </li>
          <li class="header__menu__item">
            <RouterLink to="" class="header__menu__item__link"> Tour nước ngoài </RouterLink>
          </li>
          <li class="header__menu__item">
            <RouterLink to="" class="header__menu__item__link"> Dịch vụ du lịch </RouterLink>
          </li>
          <li class="header__menu__item">
            <RouterLink to="" class="header__menu__item__link"> Tin tức </RouterLink>
          </li>
          <li class="header__menu__item">
            <RouterLink to="/about" class="header__menu__item__link"> Giới thiệu </RouterLink>
          </li>
          <li class="header__menu__item">
            <RouterLink to="" class="header__menu__item__link"> Liên hệ </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.fixed-header {
  position: fixed !important;
  top: 0 !important;
  background-color: var(--primary) !important;
  animation: moveDown ease 0.6s;
  z-index: 100;
}

/* Header navbar */
.header__navbar {
  background-color: var(--primary-blur-2);
  .container-xl {
    display: flex;
    justify-content: space-between;
    .header__navbar__list {
      list-style: none;
      padding-left: 0;
      margin: 0;
      .header__navbar__item {
        margin: 0 8px;
        position: relative;
      }

      .header__navbar__item,
      .header__navbar__item__link {
        display: inline-block;
        font-size: 0.9rem;
        color: var(--text-light-1);
        text-decoration: none;
        font-weight: 400;
      }

      .header__navbar__item__link {
        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
      }

      .header__navbar__item__link .header__navbar__item__link--strong {
        font-weight: 400;
      }

      .header__navbar__item--separate::after {
        content: '';
        display: block;
        position: absolute;
        border-left: 1px solid var(--text-light-1);
        height: 14px;
        top: 4px;
        right: -9px;
      }

      .header__navbar__icon {
        font-size: 0.9rem;
        color: var(--white);
        text-decoration: none;
        margin: 0 4px;
      }
    }
  }
}

/* Header main */
.header__main {
  background-color: var(--primary);
  .container-xl {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header__main__logo__img {
      width: 300px;
    }
    .header__main__search {
      height: 40px;
      display: flex;
      width: 35%;
      .header__main__search-box {
        width: 100%;
        height: 100%;
        padding: 10px;
        font-size: 1rem;
        border-style: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        transition: all 0.3s ease;
        outline: none;
        &:focus {
          box-shadow: 0 0 5px var(--bright-light-1);
        }
      }
      .header__main__search-btn {
        width: 60px;
        height: 100%;
        font-size: 1rem;
        background-color: var(--primary-dark);
        color: var(--white);
        cursor: pointer;
        border-style: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        &:hover {
          background-color: var(--primary-dark-2);
        }
      }
    }
    .header__main__list {
      list-style: none;
      margin: 0;
      padding: 0;
      .header__main__option {
        display: inline-block;
        .header__main__option__link {
          cursor: pointer;
          &:hover .header__main-icon {
            color: var(--primary-dark-2);
          }
        }
      }
    }
    .header__main-icon {
      font-size: 2rem;
      color: var(--white);
      margin: 0 16px;
    }
  }
}

/* Header menu */
.header__menu__wrapper {
  background-color: var(--transparent-2);
  position: absolute;
  top: 104px;
  right: 0;
  left: 0;
  z-index: 10;

  .header__menu {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .header__menu__list {
      display: inline-block;
      list-style: none;
      padding: 0;
      margin: 0;

      .header__menu__item {
        display: inline-block;
        margin: 0 20px;
        padding: 8px;

        .header__menu__item__link {
          text-decoration: none;
          border: 2px solid var(--transparent);
          color: var(--text-light-1);
          font-size: 1rem;
          font-weight: 500;
          text-transform: uppercase;
          transition: all 0.4s ease;
          &:hover {
            color: var(--primary-dark-2);
            border-bottom: 2px solid var(--primary-dark);
          }
        }
      }
    }
  }
}
// ========== RESPONSIVE ==========
/* Desktop */
@media (max-width: 1200px) {
  .header__menu__item__link {
    font-size: 0.8rem !important;
  }
}

/* Mobile & Tablet */
@media (max-width: 1023px) {
}

/* Tablet */
@media (min-width: 740px) and (max-width: 1023px) {
  html {
    font-size: 14px;
  }
}

/* Mobile */
@media (max-width: 739px) {
    html {
    font-size: 12px;
  }
}
</style>
