document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navigation = document.querySelector(".navigation");

    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        navigation.classList.toggle("active");
    });
});