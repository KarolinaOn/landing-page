// const track = document.querySelector('.track');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// const dots = document.querySelectorAll('.dot');

// let current = 0;

// prevBtn.onclick = () => changeActiveSlide(current - 1);
// nextBtn.onclick = () => changeActiveSlide(current + 1);
// dots[0].onclick = () => changeActiveSlide(0);
// dots[1].onclick = () => changeActiveSlide(1);
// dots[2].onclick = () => changeActiveSlide(2);

// function changeActiveSlide(index) {
//   dots[current].classList.remove('active');
//   current = (index + 3) % 3;
//   dots[current].classList.add('active');
//   track.children[current].scrollIntoView({behavior: 'smooth'});
// }

const sliderBody = document.querySelector('.slider__body');
const prevBtn = document.querySelector('.slider__prev-btn');
const nextBtn = document.querySelector('.slider__next-btn');
const sliderDots = document.querySelectorAll('.slider__dot');

let current = 0;

prevBtn.onclick = () => changeActiveSlide(current - 1);
nextBtn.onclick = () => changeActiveSlide(current + 1);
sliderDots[0].onclick = () => changeActiveSlide(0);
sliderDots[1].onclick = () => changeActiveSlide(1);
sliderDots[2].onclick = () => changeActiveSlide(2);
sliderDots[3].onclick = () => changeActiveSlide(3);

function changeActiveSlide(index) {
  sliderDots[current].classList.remove('active');
  current = (index + 4) % 4;
  sliderDots[current].classList.add('active');
  sliderBody.children[current].scrollIntoView({behavior: 'smooth'});
}
