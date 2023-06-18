const icon = document.querySelector('.btn_icon');
const icon2 = document.querySelector('.btn_icon2');
const btn2 = document.querySelector('.btn');

btn2.addEventListener('click', () => {
  icon2.classList.toggle('icon_hidden');
  icon.classList.toggle('icon_hidden');
});