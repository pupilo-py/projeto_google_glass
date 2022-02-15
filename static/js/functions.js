const btnMobile = window.document.querySelector("#btn-mobile")
btnMobile.addEventListener("click", trocarMenu)
btnMobile.addEventListener("touchstart", trocarMenu)

function trocarMenu(event) {

    if (event.type === "touchstart") {
        event.preventDefault()
    }

    const nav = window.document.querySelector("nav")
    nav.classList.toggle("active")
}