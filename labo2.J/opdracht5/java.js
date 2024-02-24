const setup = () => {
    let pElement=document.getElementById("wijzigTxt");
    wijzigTxt.addEventListener("click", wijzig);
}

const wijzig = () => {
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML = 'Hallo!';
}
window.addEventListener("load", setup);