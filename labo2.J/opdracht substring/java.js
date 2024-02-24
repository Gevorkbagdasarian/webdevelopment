const setup = () => {
    const substringButton = document.getElementById("substringButton");
    substringButton.addEventListener("click", substring);
}

const substring = () => {
    const txtInp = document.getElementById("txtInp").value;
    const slice1 = document.getElementById("slice1").value;
    const slice2 = document.getElementById("slice2").value;
    const txtOutp = document.getElementById("txtOutput");

    txtOutp.innerHTML = txtInp.slice(slice1, slice2);
}

window.addEventListener("load", setup);