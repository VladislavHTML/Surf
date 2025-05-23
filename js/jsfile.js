document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navigation = document.querySelector(".navigation");
    const body = document.body;

    function toggleMenu() {
        const isActive = burger.classList.toggle("active");
        navigation.classList.toggle("active");

        if (isActive) {
            lockScroll();
        } else {
            unlockScroll();
        }
    }

    function lockScroll() {
        body.classList.add("scroll-lock");
    }

    function unlockScroll() {
        body.classList.remove("scroll-lock");
    }

    if (burger) {
        burger.addEventListener("click", toggleMenu);
    }
});
