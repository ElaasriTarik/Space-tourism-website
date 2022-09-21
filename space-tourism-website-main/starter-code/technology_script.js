const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
let stageName = document.querySelector('.nameOfStage');
let description = document.querySelector('.description');
let labelImage = document.querySelector('.labelImage');
let allInfo;
fetch('data.json')
.then(res => res.json())
.then(res => allInfo = res);

const stages = [one, two, three].forEach((item) => {
     item.addEventListener('click', (e) => {
       let stageValue = e.target.classList[0];
       let arr = allInfo.technology;
       for (let stage of arr) {
        if (stage.number.toLowerCase() === stageValue) {
          document.querySelector(`.${stageValue}`).style.borderBottom = '2px solid azure';
          stageName.textContent = stage.name;
          labelImage.style.background = `url('${stage.images.portrait}')`;
          labelImage.style.backgroundPosition = 'center';
          labelImage.style.backgroundSize = 'cover';
          description.textContent = stage.description;

        }
       }
     })
});
