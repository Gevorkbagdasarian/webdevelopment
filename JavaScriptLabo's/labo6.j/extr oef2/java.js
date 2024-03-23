const setup = () => {
    const createImage = (src) => {
        let img = document.createElement('img');
        img.src = src;
        return img;
    };

    const addListItemClass = (element) => {
        element.classList.add('listitem');
    };

    let firstListItem = document.querySelector('li');

    if (firstListItem) {
        addListItemClass(firstListItem);

        let image = createImage('images/landen-422.jpg');
        document.body.appendChild(image);
    }
}
window.addEventListener("load", setup);

