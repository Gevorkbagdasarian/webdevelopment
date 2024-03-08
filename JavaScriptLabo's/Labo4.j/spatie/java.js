const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        result += inputText[i];
        if (i !== inputText.length - 1) {
            result += " ";
        }
    }
    return result;
}

// Test de functie
const inputText = "Ditiseentest";
console.log(maakMetSpaties(inputText));