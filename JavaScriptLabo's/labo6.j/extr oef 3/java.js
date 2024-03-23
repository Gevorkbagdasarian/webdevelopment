const setup = () => {
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', maak);
    });
};

const maak = () => {
    let div = document.querySelector('#Div');
    if (div) {
        let p = document.createElement('p');
        p.textContent = "text";
        div.appendChild(p);
    } else {
        console.error("Div element not found.");
    }
};

setup();
