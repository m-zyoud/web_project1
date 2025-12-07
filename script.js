const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");
    } else {
        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");
    }
});

