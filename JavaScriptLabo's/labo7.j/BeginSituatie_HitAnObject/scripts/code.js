let gameSettings = {
    imageCount: 5, // number of images
    imageSize: 48, // size of the image
    imagePathPrefix: "images/", // directory of the images
    imagePathSuffix: ".png", // image file extension
    moveDelay: 1000, // milliseconds for a new image to appear
    score: 0, // number of hits
    timeoutId: 0 // id of the timeout timer for cancellation
};

const initializeGame = () => {
    let startButton = document.getElementById('start');
    startButton.addEventListener("click", startGame);
};

const startGame = () => {
    let startButton = document.getElementById('start');
    startButton.style.display = 'none';

    let imageElement = document.getElementById('img0');
    imageElement.addEventListener("click", moveImage);
    gameSettings.timeoutId = setInterval(changeImage, gameSettings.moveDelay);

    let containerWidth = 600;
    let containerHeight = 600;
    let maxLeft = containerWidth - gameSettings.imageSize;
    let maxTop = containerHeight - gameSettings.imageSize;

    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * maxTop);
    imageElement.style.left = left + "px";
    imageElement.style.top = top + "px";

    changeImage();
};

const moveImage = () => {
    let imageElement = document.getElementById('img0');
    let containerWidth = 600;
    let containerHeight = 600;
    let maxLeft = containerWidth - gameSettings.imageSize;
    let maxTop = containerHeight - gameSettings.imageSize;

    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * maxTop);

    console.log(imageElement.src);

    if (imageElement.src.includes(gameSettings.imagePathPrefix + "0" + gameSettings.imagePathSuffix)) {
        alert(`You lost! Final score: ${gameSettings.score}`);
        clearInterval(gameSettings.timeoutId);
    } else {
        gameSettings.score++;
        let scoreTextElement = document.getElementById("text");
        scoreTextElement.innerText = `Score: ${gameSettings.score}`;
        changeImage();
        imageElement.style.left = left + "px";
        imageElement.style.top = top + "px";
    }
};

const changeImage = () => {
    let imageElement = document.getElementById('img0');
    let randomIndex = Math.floor(Math.random() * gameSettings.imageCount);
    imageElement.src = gameSettings.imagePathPrefix + randomIndex + gameSettings.imagePathSuffix;
};

window.addEventListener("load", initializeGame);
