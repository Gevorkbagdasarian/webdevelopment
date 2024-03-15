const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";

    const vervangDeDoorHet = (zin) => {
        let woorden = zin.split(' ');
        for (let i = 0; i < woorden.length; i++) {
            if (woorden[i] === 'de') {
                woorden[i] = 'het';
            }
        }
        return woorden.join(' ');
    }

    console.log(vervangDeDoorHet(tekst));
}
window.addEventListener("load", setup);