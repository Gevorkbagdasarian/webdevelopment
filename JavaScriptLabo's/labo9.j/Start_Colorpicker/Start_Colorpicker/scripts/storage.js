const storeSliderValues = () => {
    let reSlider = document.getElementById("sldRed");
    let grSlider = document.getElementById("sldGreen");
    let blSlider = document.getElementById("sldBlue");

    let slider = {
        r: reSlider.value,
        g: grSlider.value,
        b: blSlider.value
    };

    let sliderJson = JSON.stringify(slider);
    localStorage.setItem("vives.be.currSlider", sliderJson);
};

const restoreSliderValues = () => {
    let reSlider = document.getElementById("sldRed");
    let grSlider = document.getElementById("sldGreen");
    let blSlider = document.getElementById("sldBlue");

    let sliderJson = localStorage.getItem("vives.be.currSlider");
    if (sliderJson !== null) {
        let slider = JSON.parse(sliderJson);
        reSlider.value = slider.r;
        grSlider.value = slider.g;
        blSlider.value = slider.b;
    }
};

const storeSwatches = () => {
    let swatchComponents = document.querySelectorAll(".swatch");
    let arrSwatches = [];

    swatchComponents.forEach((swatch) => {
        let color = window.getComputedStyle(swatch).getPropertyValue("background-color");
        let rgb = color.match(/\d+/g);
        let swatchObj = {
            r: rgb[0],
            g: rgb[1],
            b: rgb[2]
        };
        arrSwatches.push(swatchObj);
    });

    let jsonArr = JSON.stringify(arrSwatches);
    localStorage.setItem("vives.be.swatches", jsonArr);
};

const restoreSwatches = () => {
    let swatchJson = localStorage.getItem("vives.be.swatches");
    if (swatchJson !== null) {
        let arrSwatches = JSON.parse(swatchJson);
        arrSwatches.forEach((swatch) => {
            addSwatchComponent(swatch.r, swatch.g, swatch.b);
        });
    }
};
