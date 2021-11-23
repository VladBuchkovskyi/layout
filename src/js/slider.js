let offset = 0; // храним смещение slider-line от левого края
const sliderLine = document.querySelector('.slider-line');
const windowWidth = window.outerWidth;
const pics = document.querySelectorAll('.slider-pic');
const dots = document.querySelectorAll('.circle');
const dotsPanel = document.querySelector('.circles');

document.querySelector('.slider-next').addEventListener('click', function () {
  let index = offset / windowWidth;
  dots.item(index).classList.remove('active');
  offset = offset + windowWidth; //ширина картинки
  if (offset > windowWidth * (pics.length - 1)) {
    offset = 0;
  }
  index = offset / windowWidth;
  dots.item(index).classList.add('active');
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
  let index = offset / windowWidth;
  dots.item(index).classList.remove('active');
  offset = offset - windowWidth;
  if (offset < 0) {
    offset = windowWidth * (pics.length - 1);
  }
  index = offset / windowWidth;
  dots.item(index).classList.add('active');
  sliderLine.style.left = -offset + 'px';
});

dotsPanel.addEventListener('click', (e) => {
  e.preventDefault();
  const clickedDot = e.target.closest('.circle');
  const indexClickedDot = Array.prototype.indexOf.call(dots, clickedDot);

  if (!clickedDot) return;

  const activeDot = document.querySelector('.active');

  activeDot.classList.remove('active');
  clickedDot.classList.add('active');

  offset = 0 + windowWidth * indexClickedDot;
  if (offset > windowWidth * (pics.length - 1)) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});
