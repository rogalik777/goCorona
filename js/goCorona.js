let menuBody = document.querySelector('.menu__body');
let iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   iconMenu.addEventListener('click', function (e){
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   })
}