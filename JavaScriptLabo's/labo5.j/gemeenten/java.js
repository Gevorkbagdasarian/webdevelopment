const setup = function() {
    inladen();
};

const inladen = function() {
    let stop = false;
    let lijst = document.getElementById('gemeenten');
    let gemeenten = [];

    while (!stop) {
        let input = window.prompt("Geef een gemeente op", "onbekend");
        if (input === 'stop') {
            stop = true;
        } else {
            gemeenten.push(input);
        }
    }

    gemeenten = gemeenten.sort();
    console.log(gemeenten);

    for (let i = 0; i < gemeenten.length; i++) {
        let input = gemeenten[i];
        let option = document.createElement('option');
        option.value = input;
        option.textContent = input;
        lijst.appendChild(option);
    }
};

window.addEventListener("load", setup);
