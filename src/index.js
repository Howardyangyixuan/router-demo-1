//将div放在window上，而非隐藏
const div1 = document.createElement("div")
div1.innerHTML = "1.hi,我是第一个div"
const div2 = document.createElement("div")
div2.innerHTML = "2.hi,我是第一个div"
const div3 = document.createElement("div")
div3.innerHTML = "3.hi,我是第一个div"
const noMatch = document.createElement("div")
noMatch.innerHTML = "该页面不存在"
//添加路由表
const routerHashTable = {
  "1": div1,
  "2": div2,
  "3": div3,
}

const links = document.querySelectorAll("a.Link")
for (let link of links) {
  link.addEventListener("click", e => {
    e.preventDefault()
    console.log(link)
    const href = link.getAttribute("href")
    console.log(href)
    window.history.pushState(null,null, href)
    Router()
  })
}

function Router() {
  //根据hash设置页面
  //设置路由
  let div
  console.log(window.location.pathname)
  const number = window.location.pathname.split("/")[1]
  console.log(number)
  //默认路由
  if (number === "") return
  //根据路由表配置路由
  div = routerHashTable[number]
  //为空时，为noMatch
  if (!div) {
    div = noMatch
  }
  //根据div是否存在进行展示
  const stage = document.querySelector("#stage")
  console.log(stage)
  stage.innerHTML = ""
  stage.appendChild(div)
}


Router()