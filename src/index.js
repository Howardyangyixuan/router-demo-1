window.addEventListener("hashchange", () => {

  console.log(window.location.hash)
// const number = window.location.hash.toString().split("/")[1]
  const number = window.location.hash.substr(1)
  console.log(number)

// const div = document.getElementById(number)
  const stage = document.querySelector(`#stage`)
  console.log(stage.children)
  Array.from(stage.children).forEach((item) => {
    console.log(item)
    if (item?.style?.display)
      item.style.display = "none"
    document.body.appendChild(item)
  })
  const div = document.querySelector(`#div${number}`)
  console.log(div)
  if (div) {
    stage.appendChild(div)
    div.style.display = "block"

  }
})