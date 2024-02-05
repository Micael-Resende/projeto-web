function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const alt = document.querySelector("alt")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/eu1.jpg")
    alt.setAttribute("alt", "Eu sou o <b>Micael Resende</b>")
  } else {
    img.setAttribute("src", "./assets/eu2.jpg")
  }
}
