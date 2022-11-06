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

