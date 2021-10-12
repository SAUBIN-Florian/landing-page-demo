// PREVENT ORIENTATION CHANGE ONPHONE DEVICE

window.screen.orientation.lock('portrait');

// TOPBAR SWAP COLOR

const topbar = document.querySelector(".topbar");
const topbarItems = document.querySelectorAll(".topbar-item");
const matchPosition = document.querySelector(".about-us");

window.addEventListener("scroll", () => {
  if(matchPosition.getBoundingClientRect().top <= 50){
    topbar.classList.remove("topbar-state-1");
    topbar.classList.add("topbar-state-2");
    topbarItems.forEach((item) => {
      item.classList.add("active")
    })
  }else if(matchPosition.getBoundingClientRect().top >= 50){
    topbar.classList.add("topbar-state-1");
    topbar.classList.remove("topbar-state-2");
    topbarItems.forEach((item) => {
      item.classList.remove("active")
    })
  }
})

// OPACITY SCROLL ANIMATION

const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2
};

const handleIntersect = (entries, observer) => {
  entries.forEach((entry)=>{
    if(entry.intersectionRatio > ratio){
      entry.target.classList.add("reveal-visible")
      observer.unobserve(entry.target);
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach((r)=>{
  observer.observe(r);
})

// SMOOTH SCROLL ANIMATION

const smoothScroll = (target, duration) => {
  let targetPoint = document.querySelector(target);
  let targetPosition = targetPoint.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if(startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  // spicyyoghurt.com pour cette fonction de fondu d'animation
  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return  c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) -1) + b;
  }

  requestAnimationFrame(animation);
}

const homeScroll = document.querySelector(".scroll-home");
const aboutScroll = document.querySelector(".scroll-about-us");
const pricesScroll = document.querySelector(".scroll-prices");
const footerScroll = document.querySelector(".scroll-footer");
const topScroll = document.querySelector(".footer-btn");

homeScroll.addEventListener("click", smoothScroll("#top", 1000));
aboutScroll.addEventListener("click", smoothScroll("#about-us", 1000));
pricesScroll.addEventListener("click", smoothScroll("#prices", 1000));
footerScroll.addEventListener("click", smoothScroll("#footer", 1000));
topScroll.addEventListener("click", smoothScroll("#top", 1000));

// MAPBOX API

mapboxgl.accessToken = 'pk.eyJ1Ijoicy1mbG9yaWFuIiwiYSI6ImNrbGt3cjYxazBycG8ycm9iOWgzbXEyOGIifQ.XvkhPvp5NJCloXP3atH25w';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/outdoors-v11',
  center: [4.833350965586533, 45.76423780141141],
  zoom: 15
});
