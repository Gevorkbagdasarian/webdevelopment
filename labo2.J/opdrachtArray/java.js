const setup = () => {
}
let familieleden =["Gev","Hootan","Mustafa","Benjamin","Rudy"];
console.log(familieleden.length);
console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);

let voegNaamToe = prompt("Voer een nieuwe naam in:");
    voegNaamToe(familieNamen, nieuweNaam);

console.log("Array na toevoegen van nieuwe naam: " + familieNamen);

let familieString = familieleden.join(", ");
console.log("Array als string: " + familieString);


window.addEventListener("load", setup);