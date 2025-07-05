function changeBGBtn(parentHTML) {
  const parentHTMLBtns = document.querySelector(parentHTML);
  const button = parentHTMLBtns.querySelector(".headerBtnContacts");

  button.addEventListener('click', changeBg);

  function changeBg(e) {
    const isBtn = e.target.tagName === 'A';
    document.querySelector('.headerBtn_box').style.background = '#FFA216'
  }
}

changeBGBtn('.btnParent_01')
// changeBGBtn('.btnParent_02')
