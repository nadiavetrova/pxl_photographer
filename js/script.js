function changeBGBtnInit(parentHTML) {
  const parentHTMLBtns = document.querySelector(parentHTML);
  const button = parentHTMLBtns.querySelector(".headerBtnContacts");

  button.addEventListener('click', changeBg);

  function changeBg(e) {
    const isBtn = e.target.tagName === 'A';
    if (isBtn) {
      e.target.style.background = '#607D8B';
    }
  }
}

changeBGBtnInit('.btnParent_01');
changeBGBtnInit('.btnParent_02');



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



function specializationLineInit() {
  const specializationItems = document.querySelectorAll('.specializationItem');
  const percents = document.querySelectorAll('.percent');

  specializationItems.forEach((item, index) => {
    const percent = percents[index].textContent.trim();

    item.style.width = percent;
  });
}

specializationLineInit()