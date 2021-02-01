function Router() {
  //根据hash设置页面
  //设置路由
  let div
  console.log(window.location.hash)
  const number = window.location.hash.substr(1)
  console.log(number)
  //默认路由
  if (number === "") return
  //其他情况下先清空页面
  const stage = document.querySelector(`#stage`)
  console.log(stage.children)
  Array.from(stage.children).forEach((item) => {
    console.log(item)
    if (item?.style?.display)
      item.style.display = "none"
    document.body.appendChild(item)
  })
  //添加路由表
  const routerHashTable = {
    "1":"#div1",
    "2":"#div2",
    "3":"#div3",
  }
  //处理DOM查询id可能出现的报错
  try {
    const query = routerHashTable[number]
    div = document.querySelector(query)
    console.log(div)
  } catch {
    div = null
  }
  //根据div是否存在进行展示
  if (div) {
    stage.appendChild(div)
    div.style.display = "block"
  } else {
    const noMatch = document.querySelector(`#NoMatch`)
    stage.appendChild(noMatch)
    noMatch.style.display = "block"
  }
}


Router()
window.addEventListener("hashchange", Router)