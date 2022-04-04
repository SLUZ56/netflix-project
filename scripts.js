let button = document.getElementById("question-button")
let menu = document.getElementById("question")
let image = document.getElementById("question-image")

function showMenu() {
    if (menu.style.display === "block") {
        menu.style.display = "none"
        image.id = "question-image"
    } else {
        menu.style.display = "block"
        image.id = "question-image-rotate"
    }


}
button.addEventListener("click", showMenu)
