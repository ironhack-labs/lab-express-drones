document.addEventListener('DOMContentLoaded', () => {

  console.log('lab-express-drones JS imported successfully!');

}, false);

let myCarousel = document.querySelector('#myCarousel')
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})
