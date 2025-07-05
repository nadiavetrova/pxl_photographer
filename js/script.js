function changeBGBtnInit(parentHTML) {
  const parentHTMLBtns = document.querySelector(parentHTML);
  const button = parentHTMLBtns.querySelector(".headerBtnContacts");

  button.addEventListener('click', changeBg);

  function changeBg(e) {
    const isBtn = e.target.tagName === 'A';
    document.querySelector('.headerBtn_box').style.background = '#FFA216'
  }
}

changeBGBtnInit('.btnParent_01')
// changeBGBtnInit('.btnParent_02')


function burgerInit() {
  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.headerMenuList');
    const close = document.querySelector('.closeBurger');

    burger.addEventListener('click', () => {
      menu.classList.add('active');
      console.log(111);

    });

    close.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
}

burgerInit();

