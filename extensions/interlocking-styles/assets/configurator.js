var width = window.innerWidth;
var height = window.innerHeight;

document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("canvas-preview");
    console.log("container.clientWidth", container.clientWidth);

    // var width = container.style.width; // Get parent width
    // var height = container.style.height; // Get parent width
    // console.log({ width, height });

    var stage = new Konva.Stage({
        container: 'canvas-preview',
        width: width - (width * 0.25),
        height: height,
    });
    var layer = new Konva.Layer();

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

            const layout = this.getAttribute('data-layout'); // Get the data-type value
            if (layout === "layout1") {
                var rect1 = new Konva.Rect({
                    x: (width / 2) - 430,
                    y: 150,
                    width: 430,
                    height: 288,
                    fill: 'black',
                    stroke: '#AB977C',
                    strokeWidth: 2,
                });
                layer.add(rect1)
                stage.add(layer)
            }
        });
    });
})