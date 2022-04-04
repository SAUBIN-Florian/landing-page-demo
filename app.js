// TOPBAR SWAP COLOR

const topbar = document.querySelector(".topbar");
const topbarItems = document.querySelectorAll(".topbar-item");
const matchPosition = document.querySelector(".about-us");

console.log(topbarItems)

window.addEventListener("scroll", () => {
  if(matchPosition.getBoundingClientRect().top <= 50){
    topbar.classList.remove("topbar-state-1");
    topbar.classList.add("topbar-state-2");
    topbarItems.forEach((item) => {
      item.children[0].classList.add("active")
    })
  }else {
    topbar.classList.add("topbar-state-1");
    topbar.classList.remove("topbar-state-2");
    topbarItems.forEach((item) => {
      item.children[0].classList.remove("active")
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

// MAPBOX API

mapboxgl.accessToken = 'pk.eyJ1Ijoicy1mbG9yaWFuIiwiYSI6ImNrbGt3cjYxazBycG8ycm9iOWgzbXEyOGIifQ.XvkhPvp5NJCloXP3atH25w';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/outdoors-v11',
  center: [4.833350965586533, 45.76423780141141],
  zoom: 15
});
