// Заміна імейла в хіра на напис "email" для екранів менше 375px, так як оригінальний імейл вілазить за межі його врапера
const emailText = document.querySelector(".hero__email-link")
emailText.textContent = window.innerWidth < 375 ? "email" : "lloydjefferson@gmail.com"
// 

const backdrop = document.querySelector(".header__backdrop")
const menuBtn = document.querySelector(".header__menu-btn")
const closeBtn = document.querySelector(".header__menu-close-btn")

menuBtn.addEventListener("click", () => {
    backdrop.classList.remove("visually-hidden")
})
closeBtn.addEventListener("click", () => {
    backdrop.classList.add("visually-hidden")
})