<template>
  <div class="container-xl">
    <div class="r-email">
      <p class="r-email__tittle">ĐĂNG KÝ NHẬN THÔNG TIN</p>
      <form action="" class="r-register__form">
        <input type="email" class="r-email__form__input" placeholder="Email..." />
        <button class="r-email__form__submit">ĐĂNG KÝ</button>
      </form>
    </div>
  </div>
</template>
<style lang="css" scoped>
.r-email {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  position: relative;
}

.r-email::before {
  content: '';
  width: 100%;
  height: 1px;
  background-color: #c0c0c0;
  position: absolute;
  top: 0;
}

.r-email__tittle {
  font-size: 1.8rem;
  font-weight: 500;
}

.r-register__form {
  width: 30%;
  display: flex;
}

.r-email__form__input {
  width: 80%;
  /* width: 80%; */
  padding: 10px;
  font-size: 1.2rem;
  box-sizing: border-box;
  border: none;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  box-shadow: 0 0 2px var(--divider-dark-1);
}

.r-email__form__input:focus {
  outline: none;
}

.r-email__form__submit {
  width: 25%;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  background-color: var(--primary);
  color: var(--white);
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 0 0 2px var(--primary);
  cursor: pointer;
}

.r-email__form__submit:hover {
  background-color: var(--primary-dark);
}
</style>
