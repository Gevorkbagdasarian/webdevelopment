let global = {
    boxes: [], // aantal boxes
};
const setup = () => {
    let btnGO = document.getElementById("btnGO");
    btnGO.addEventListener("click", search);
    initializeStart(localStorage.getItem("Boxes"));
}
const search = () => {
    let searchField = document.getElementById("txtInput")
    if(searchField.value.charAt(0) !==  "/"){
        alert("Invalid command");
    }
    else{
        const commands = {
            "g": { keyword: "google", color: "bg-primary", btnColor: "btn-info" },
            "y": { keyword: "youtube", color: "bg-danger", btnColor: "btn-primary" },
            "t": { keyword: "twitter", color: "bg-dark", btnColor: "btn-secondary" },
            "i": { keyword: "instagram", color: "bg-warning", btnColor: "btn-secondary" }
        };
        const command = searchField.value.charAt(1);
        if(commands.hasOwnProperty(command) && searchField.value.charAt(2) === " ") {
            const { keyword, color, btnColor } = commands[command];
            let copySearch = searchField.value.substring(3);
            let text = copySearch;
            copySearch = copySearch.split(" ").join("%20");
            let link = `https://${keyword}.com/hashtag/${copySearch}`;
            addbox(link, text, color, btnColor, keyword);
            window.open(link);
            saveToStorage();
        }
        else{
            alert("Unknown command prefix");
        }
    }
}

const addbox = (link, text, color, btnColor, keyword) => {
    let cardsBox = document.getElementById('cardsBox');
    let container = document.createElement("div");
    container.classList.add('card');
    container.classList.add('kaart');
    container.classList.add('text-white');
    container.style.width = "18rem";
    let containerbody = document.createElement("div");
    containerbody.classList.add("card-body");
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    let cardLink = document.createElement("a");
    cardLink.classList.add("btn");

    cardLink.innerText = "GO!";
    cardLink.href = link;
    cardLink.target = "_blank";
    cardTitle.innerText = keyword.charAt(0).toUpperCase() + keyword.slice(1);
    cardText.innerText = text;
    container.classList.add(color);
    cardLink.classList.add(btnColor);

    container.appendChild(containerbody);
    containerbody.appendChild(cardTitle);
    containerbody.appendChild(cardText);
    containerbody.appendChild(cardLink);
    cardsBox.appendChild(container);
}


const saveToStorage = () => {
    global.boxes = [];
    let divchilds = document.getElementsByClassName('kaart');
    for(let i = 0; i < divchilds.length; i++){
        let link = divchilds[i].querySelector("a").getAttribute("href");
        let tekst = divchilds[i].querySelector("p").innerText;
        let info = [];
        info.push(tekst);
        info.push(link);
        global.boxes.push(info);

    }
    let string = JSON.stringify(global.boxes);
    localStorage.setItem("Boxes", string);
}

const initializeStart = (start) =>{
    let arrayToPush = JSON.parse(start);
    if(arrayToPush !== null){
        for(let i = 0; i < arrayToPush.length; i++) {
            addbox(arrayToPush[i][1], arrayToPush[i][0]);
        }
    }
}
window.addEventListener("load", setup);
