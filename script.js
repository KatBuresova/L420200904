document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelectorAll(".card-item.active").forEach((element) => {
        element.addEventListener("click", (e) => {
            e.currentTarget.classList.toggle("active");
        });
    });
});