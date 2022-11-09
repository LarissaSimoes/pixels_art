function colorGenerator() {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
 }

 const randomColors = () => {
    for (let i = 1; i < 4; i += 1){
        const color = document.querySelectorAll('.color');
        color[i].style.backgroundColor = colorGenerator();
    }
 }

 window.onload = randomColors;
 const colorButton = document.querySelector('#button-random-color');
 colorButton.addEventListener('click', randomColors);
 localStorage.setItem('colorPalette',JSON.stringify(randomColors));

 const pixelBoard = document.querySelector('#pixel-board');

 const criaPixels = () => {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
 }

 pixelBoardFunction = (numberOfPixels) => {
    for (let i = 0; i < numberOfPixels; i += 1){
        criaPixels();
    }
 }
 pixelBoardFunction(25);

const colorPalette = document.getElementsByClassName('color');

removeSelected = () => {
   for (let i = 0; i < colorPalette.length; i += 1) {
      colorPalette[i]. classList.remove('selected');
   }
}

selectColor = (event) => {
   event.target.classList.add('selected');
}

for (let i = 0; i < colorPalette.length; i += 1){
   colorPalette[i].addEventListener('click', removeSelected);
   colorPalette[i].addEventListener('click', selectColor);
}