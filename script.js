async function start(){
  const response=await fetch("https://dog.ceo/api/breeds/list/all")
  const data=await response.json()
createBreedList(data.message)
}
start()

function createBreedList(breedList){
  document.getElementById("breed").innerHTML = 
  `
  <select onchange="loadByBreed(this.value)">
  <option>Choose a dog breed</option>
  ${Object.keys(breedList).map(function (breed) {
    return `<option>${breed}</option>`
  }).join('')}
    </select>
  `
}
async function loadByBreed(breed){

const response=await fetch(`https://dog.ceo/api/breed/${breed}/images`)
const data =await response.json()
console.log(data)
createImage(data.message)
}
function createImage(images){
document.getElementById("slide").innerHTML=`
<div class="image" style="background-image:url('${images[0]}')"></div>
`
}