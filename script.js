function changeColor () {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let white = Math.floor(Math.random() * 255);
    let color = `rgba(${red}, ${green}, ${blue}, ${white})`
    return color;
}

const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    const randomColor = changeColor();
    document.body.style.backgroundColor = randomColor;
});
