let tekst = "De man van An geeft geen hand aan ambetante verwanten";

let index = tekst.indexOf("an");
let count = 0;
while (index !== -1) {
    count++;
    index = tekst.indexOf("an", index + 1);
}
console.log("Aantal keren 'an' gevonden met indexOf:", count);

let lastIndex = tekst.lastIndexOf("an");
let countLast = 0;
while (lastIndex !== -1) {
    countLast++;
    lastIndex = tekst.lastIndexOf("an", lastIndex - 1);
}
console.log(count);
window.addEventListener("load", setup);