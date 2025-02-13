document.addEventListener("DOMContentLoaded", function () {
    const configuratorBtn = document.getElementById("btn-configurator")
    const configurator = document.getElementById("configurator")
    configuratorBtn.addEventListener("click", function () {
        configurator.classList.remove("hidden")
        configurator.classList.add("show")
    })


    // Image click handler
    const images = document.querySelectorAll(".layout-img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            // Remove 'selected' class from all images
            images.forEach(img => img.classList.remove("selected-image"));

            // Add 'selected' class to clicked image
            this.classList.add("selected-image");
        });
    });
})