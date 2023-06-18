const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
   let wd = window.screen.width;
   let ht = window.screen.height;
    let message = `Ширина: ${wd} Высота: ${ht}`;
    window.alert(message);
});