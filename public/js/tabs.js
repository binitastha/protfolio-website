document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            contents.forEach((c) => c.classList.remove("active"));
            tabs.forEach((t) => t.classList.remove("active"));
            contents[index].classList.add("active");
            tab.classList.add("active");
        });
    });

    contents[0].classList.add("active");
    tabs[0].classList.add("active");
});
