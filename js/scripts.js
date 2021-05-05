const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();
function toggleMenu() {
   const menu = document.querySelector('.hamburger');
   const navigation = document.querySelector('.navigation');
   const header = document.querySelector('header');

   menu.classList.toggle('is-active');
   navigation.classList.toggle('active');
   header.classList.toggle('active');
}
function closeMenu() {
   const menu = document.querySelector('.hamburger');
   const navigation = document.querySelector('.navigation');
   const header = document.querySelector('header');

   menu.classList.remove('is-active');
   navigation.classList.remove('active');
   header.classList.remove('active');
}
window.addEventListener('scroll', function () {
   const header = document.querySelector('header');
   header.classList.toggle("sticky", window.scrollY > 0)
});
function goTo(section) {
   document.querySelector('#' + section).scrollIntoView({
      behavior: 'smooth'
   });
}
function fadeinbg(index) {
   const bg = document.querySelector('.bg-backdrop');
   bg.style.opacity = 1;
   bg.style.zIndex = 2;

   document.querySelector('body').style.overflow = 'hidden';
   const box = document.querySelectorAll('.box-area')[index];
   const selectedBox = document.querySelector('.box-selected');
   selectedBox.innerHTML = box.innerHTML;

}
function fadeoutbg() {
   const bg = document.querySelector('.bg-backdrop');
   bg.style.opacity = 0;
   document.querySelector('body').style.overflow = 'auto';
   setTimeout(() => {
      bg.style.zIndex = -1;
   }, 300);
}
let observer = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const image = entry.target;
      image.src = image.src.replace('w_10/', '');
      observer.unobserve(image);
   })
}, {})
const images = document.querySelectorAll("img");
images.forEach(image => {
   observer.observe(image);
})