console.log(window.location.hash)

// const number = window.location.hash.toString().split("/")[1]
const number = window.location.hash.substr(1)
console.log(number)

// const div = document.getElementById(number)
const div = document.querySelector(`#div${number}`)
console.log(div)
if (div) {
  const stage = document.querySelector(`#stage`)
  stage.appendChild(div)
  div.style.display = "block"

}