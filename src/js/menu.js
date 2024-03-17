// Заміна імейла в хірo на напис "email" для екранів менше 375px, так як оригінальний імейл вілазить за межі його врапера
// const emailText = document.querySelector(".hero__email-link")
// emailText.textContent = window.innerWidth > 375 ? "email" : "lloydjefferson@gmail.com"
// 

const backdrop = document.querySelector(".header__backdrop")
const menuBtn = document.querySelector(".header__menu-btn")
const closeBtn = document.querySelector(".header__menu-close-btn")

menuBtn.addEventListener("click", () => {
    window.innerWidth < 768 ?
        backdrop.classList.remove("visually-hidden") :
            backdrop.classList.toggle("visually-hidden")
    })
closeBtn.addEventListener("click", () => {
    backdrop.classList.add("visually-hidden")
})

backdrop.addEventListener("click", e => {
    if (!e.target.classList.contains("header__nav-link")) {
        return
    } else {
        backdrop.classList.add("visually-hidden")
    }
})