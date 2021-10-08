// OPACITY ANIMATION
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
document.querySelectorAll(".reveal").forEach((r)=>{
  observer.observe(r);
})

// MAPBOX API

mapboxgl.accessToken = 'pk.eyJ1Ijoicy1mbG9yaWFuIiwiYSI6ImNrbGt3cjYxazBycG8ycm9iOWgzbXEyOGIifQ.XvkhPvp5NJCloXP3atH25w';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/outdoors-v11',
  center: [4.833350965586533, 45.76423780141141],
  zoom: 15
});
