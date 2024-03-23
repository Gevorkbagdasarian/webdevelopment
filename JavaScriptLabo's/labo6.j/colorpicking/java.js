const setup = () => {
    let sliders = document.querySelectorAll(".slider");
    let btnSaveColor = document.getElementById("save-color");
    btnSaveColor.addEventListener("click", save);
    sliders.forEach(slider => {
        slider.addEventListener("change", update);
        slider.addEventListener("input", update);
    });
    update();
}

const update = () => {
    let sliders = getSliderValues();
    let colorDemo = document.querySelector(".color");
    colorDemo.style.backgroundColor = `rgb(${sliders[0]}, ${sliders[1]}, ${sliders[2]})`;
    updateText(sliders[0], sliders[1], sliders[2]);
}

const getSliderValues = () => {
    let sliders = document.querySelectorAll(".slider");
    let values = [];
    sliders.forEach(slider => {
        values.push(parseInt(slider.value));
    });
    return values;
}

const updateText = (colorOne, colorTwo, colorThree) => {
    let txtEersteKleur = document.getElementById("txtEersteKleur");
    let txtTweedeKleur = document.getElementById("txtTweedeKleur");
    let txtDerdeKleur = document.getElementById("txtDerdeKleur");

    txtEersteKleur.textContent = colorOne;
    txtTweedeKleur.textContent = colorTwo;
    txtDerdeKleur.textContent = colorThree;
}

const save = () => {
    createBlock();
}

const createBlock = () => {
    let sectionColors = document.getElementById("saved-colors");
    let divBlock = document.createElement("div");
    divBlock.className = "saved-color";
    let sliders = getSliderValues();
    divBlock.style.backgroundColor = `rgb(${sliders[0]}, ${sliders[1]}, ${sliders[2]})`;

    // Create delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "✖";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
        divBlock.remove();
    });

    divBlock.appendChild(deleteButton);
    sectionColors.appendChild(divBlock);
}

window.addEventListener("load", setup);
