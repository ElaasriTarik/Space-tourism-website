
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
let role = document.querySelector('.role');
let crewName = document.querySelector('.name');
let description = document.querySelector('.crewDescription');
let crewImage = document.querySelector('.crewImage');
let allInfo;
fetch('data.json')
.then(res => res.json())
.then(res => allInfo = res);

const stages = [one, two, three, four].forEach((item) => {
     item.addEventListener('click', (e) => {
       let stageValue = e.target.classList[0];
       let arr = allInfo.crew;
       for (let stage of arr) {
        if (stage.number.toLowerCase() === stageValue) {

          e.target.classList.add('checked');
          crewName.textContent = stage.name;
          role.textContent = stage.role;
          crewImage.style.backgroundImage = `url('${stage.images.webp}')`;
          crewImage.style.backgroundPosition = 'top';
          crewImage.style.backgroundSize = 'cover';

          description.textContent = stage.bio;

        }
       }
     })
});
