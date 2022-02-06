document.addEventListener('DOMContentLoaded', () => {

  console.log('lab-express-drones JS imported successfully!');

}, false);






// script for creating/removing fields in the "create" and "edit" page

window.addEventListener("load", () => {
  let removeBtns = document.querySelectorAll(".remove-btn")
  removeBtns.forEach(elm => elm.addEventListener('click', removeInput))

  const createBtn = document.querySelector(".create-btn")
  createBtn.addEventListener('click', addInput)
})


const list = document.querySelector(".weapon-list")

function removeInput(event) {
  const target = event.currentTarget;
  const liRemove = target.parentNode
  const productToRemove = liRemove.parentNode
  productToRemove.removeChild(liRemove)
}



function addInput() {



  let newLi = document.createElement('li')
  newLi.setAttribute("class", "weapon")
  list.appendChild(newLi)

  let newInput = document.createElement("input")

  newLi.appendChild(newInput)
  newInput.setAttribute("type", "string")
  newInput.setAttribute("name", "weaponSystems")
  newInput.setAttribute("placeholder", "WEAPON SYSTEM")


  let newBtn = document.createElement("button")
  newLi.appendChild(newBtn)
  newBtn.setAttribute("type", "button")
  newBtn.setAttribute("class", "remove-btn btn-danger")
  newBtn.innerText = "REMOVE"

  removeBtns = document.querySelectorAll(".remove-btn")
  removeBtns.forEach(elm => elm.addEventListener('click', removeInput))
}





