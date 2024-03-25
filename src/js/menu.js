
const delay = async (ms) => { await new Promise(resolve => setTimeout(resolve, ms)) };

const backdrop = document.querySelector(".header__backdrop")
const menuBtn = document.querySelector(".header__menu-btn")
const closeBtn = document.querySelector(".header__menu-close-btn")

menuBtn.addEventListener("click", () => {
    window.innerWidth < 768 ?
        backdrop.classList.remove("visually-hidden") :
            backdrop.classList.toggle("visually-hidden")
    })
closeBtn.addEventListener("click", async () => {
    if (window.innerWidth < 768) {
        backdrop.style.transform = "translateX(100%)"
        // затримка в 250 мс потрібна зоб відобразилася анімація закриття меню і тільки потім поставити на нього клас visually-hidden
        await delay(250)
        backdrop.style.transform = null
    }
    backdrop.classList.add("visually-hidden")
})

backdrop.addEventListener("click", e => {
    if (e.target.classList.contains("header__nav-link") || e.target.classList.contains("header__order-link")) {
        backdrop.classList.add("visually-hidden")
    }
})


if (window.innerWidth > 767) {
    const orderTabletLink = document.querySelector("#desk-order-link")
    orderTabletLink.addEventListener("click", () => {
        backdrop.classList.add("visually-hidden")
    })
}