let menu = document.querySelector(".menu-button");
let nav = document.querySelector(".menu");
if (menu) {
    menu.addEventListener("click", (e) => {
        if (menu.classList.contains("pushed")){
            menu.classList.remove("pushed");
            nav.classList.remove("opened");
        } else {
            menu.classList.add("pushed");
            nav.classList.add("opened")
        }
    });
}