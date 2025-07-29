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

// ___________________________________________
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

// ______________________________________________
function specializationLineInit() {
  const specializationItems = document.querySelectorAll('.specializationItem');
  const percents = document.querySelectorAll('.percent');

  specializationItems.forEach((item, index) => {
    const percent = percents[index].textContent.trim();

    item.style.width = percent;
  });
}

specializationLineInit()
// _________________________________________
function saveTheme() {
  function applyTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('preferredmode', theme);
  }

  let saved = localStorage.getItem('preferredmode');
  if (!saved) {
    saved = 'light';
  }
  applyTheme(saved);

  document.querySelector('input[value="' + saved + '"]').checked = true;

  let lightBtn = document.querySelector('input[value="light"]');
  let darkBtn = document.querySelector('input[value="dark"]');

  lightBtn.addEventListener('change', function () {
    applyTheme('light');
  });

  darkBtn.addEventListener('change', function () {
    applyTheme('dark');
  });
}

saveTheme()

// ______________________________________________
function formRegistrationInit() {

  const inputEmail = document.querySelector('.inputEmail');
  const inputPassword = document.querySelector('.inputPassword');
  const inputName = document.querySelector('.inputName');
  const btnForm = document.querySelector('.btnForm');

  const errorMessageName = document.querySelector('.errorMessageName');
  const errorMessageEmail = document.querySelector('.errorMessageEmail');
  const errorMessagePassword = document.querySelector('.errorMessagePassword');


  btnForm.addEventListener('click', registerForm);

  function registerForm(event) {
    event.preventDefault(); // чтобы не перезагружалась страница

    const email = inputEmail.value.trim();
    const password = inputPassword.value.trim();
    const name = inputName.value.trim();

    let isValid = true;

    if (name === '' || name.length < 2) {
      errorMessageName.classList.remove('errorMessageDN');
      errorMessageName.classList.add('errorMessageActive');
      isValid = false;
    }

    if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorMessageEmail.classList.remove('errorMessageDN');
      errorMessageEmail.classList.add('errorMessageActive');
      isValid = false;
    }

    if (password === '' || /\s/.test(password)) {
      //пароль не должен содержать пробелы
      errorMessagePassword.classList.remove('errorMessageDN');
      errorMessagePassword.classList.add('errorMessageActive');
      isValid = false;
    }

    if (!isValid) return;

    localStorage.setItem('userLogin', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('userName', name);

    window.location.href = 'welcome.html';
  }
}
formRegistrationInit()


function populateFormFromStorage() {
  const inputEmail = document.querySelector('.inputEmail');
  const inputPassword = document.querySelector('.inputPassword');
  const inputName = document.querySelector('.inputName');

  const savedEmail = localStorage.getItem('userLogin');
  const savedPassword = localStorage.getItem('userPassword');
  const savedName = localStorage.getItem('userName');

  if (savedEmail) inputEmail.value = savedEmail;
  if (savedPassword) inputPassword.value = savedPassword;
  if (savedName) inputName.value = savedName;
}

// сразу при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  populateFormFromStorage();
  formRegistrationInit();
});

// Пароли в localStorage не шифруются, это небезопасно для реальных проектов.
// Лучше сохранять только email или использовать безопасные куки + токены.