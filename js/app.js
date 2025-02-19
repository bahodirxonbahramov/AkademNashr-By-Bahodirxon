let headerlinks = document.querySelectorAll(".header-link")

const removeActive = () => {
  headerlinks.forEach((item) => {
    item.classList.remove("active")
  })
}


  headerlinks.forEach((item) => {
    item.addEventListener("click", () => {
      removeActive()
      item.classList.add('active')
    })
  })
