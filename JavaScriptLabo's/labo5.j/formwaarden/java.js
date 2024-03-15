function showResult() {
    const form = document.getElementById("myForm");
    const isSmoker = form.elements["isSmoker"].checked ? "is wel een roker" : "is geen roker";
    const language = form.elements["language"].value ? "moedertaal is " + form.elements["language"].value : "moedertaal is niet gekozen";
    const favoriteCountry = "favoriete buurland is " + form.elements["favoriteCountry"].value;
    const orderOptions = Array.from(form.elements["order"]).filter(option => option.selected).map(option => option.value);
    const order = orderOptions.length > 0 ? "bestelling bestaat uit " + orderOptions.join(", ") : "geen bestelling geplaatst";

    console.log(isSmoker);
    console.log(language);
    console.log(favoriteCountry);
    console.log(order);
}
window.addEventListener("load", setup);