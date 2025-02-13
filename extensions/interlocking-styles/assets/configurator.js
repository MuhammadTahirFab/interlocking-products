document.addEventListener("DOMContentLoaded", function () {
    const configuratorBtn = document.getElementById("btn-configurator")
    const configurator = document.getElementById("configurator")
    configuratorBtn.addEventListener("click", function () {
        configurator.classList.remove("hidden")
        configurator.classList.add("show")
    })
})