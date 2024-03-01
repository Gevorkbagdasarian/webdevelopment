const setup = () => {
    let sliders = document.querySelectorAll(".slider");
    let txtEersteKleur = document.getElementById("txtEersteKleur");
    let txtTweedeKleur = document.getElementById("txtTweedeKleur");
    let txtDerdeKleur = document.getElementById("txtDerdeKleur");
    let colorDemo = document.querySelector(".color");

    sliders.forEach(slider => {
        slider.addEventListener("input", update);
        slider.addEventListener("change", update);
    });

    function update() {
        let value = sliders[0].value;
        let value2 = sliders[1].value;
        let value3 = sliders[2].value;

        updateText(value, value2, value3);
        updateColors(value, value2, value3);
    }

    function updateText(colorOne, colorTwo, colorThree) {
        txtEersteKleur.textContent = colorOne;
        txtTweedeKleur.textContent = colorTwo;
        txtDerdeKleur.textContent = colorThree;
    }

    function updateColors(colorOne, colorTwo, colorThree) {
        colorDemo.style.background = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
    }
};

window.addEventListener("load", setup);
