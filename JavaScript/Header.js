const header = document.querySelector("header");
const content = document.querySelector("main");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        header.style.transition = "background-color 0.3s, box-shadow 0.3s";
    } else {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        header.style.boxShadow = "none"; // Eliminar la sombra
        header.style.transition = "background-color 0.3s, box-shadow 0.3s";
    }
});