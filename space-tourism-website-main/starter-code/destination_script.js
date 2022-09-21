const moon = document.querySelector('.moon');
const mars = document.querySelector('.mars');
const europa = document.querySelector('.europa');
const titan = document.querySelector('.titan');
let destination = document.querySelector('.destination');
let planetName = document.querySelector('.planetName');
let details = document.querySelector('.details');
let average_distance_value = document.querySelector('.average-distance-value');
let average_time_value = document.querySelector('.average-time-value');
let allInfo;
fetch('data.json')
.then(res => res.json())
.then(res => allInfo = res);

const planets = [moon, mars, europa, titan].forEach((item) => {
     item.addEventListener('click', (e) => {
       let planetValue = e.target.classList[0];
       let arr = allInfo.destinations;
       for (let planet of arr) {
        if (planet.name.toLowerCase() === planetValue) {
          document.querySelector(`.${planetValue}`).style.borderBottom = '2px solid azure';
          planetName.textContent = planet.name;
          destination.style.background = `url('${planet.images.webp}')`;
          destination.style.backgroundPosition = 'center';
          destination.style.backgroundSize = 'cover';
          details.textContent = planet.description;
          average_distance_value.textContent = planet.distance;
          average_time_value.textContent = planet.travel;
        }
       }
     })
});
