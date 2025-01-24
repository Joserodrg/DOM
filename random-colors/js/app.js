const btn = document.getElementById('btn');
const color = document.getElementById('color');

const hexaColorGen = function(){
    let digitos = '0123456789ABCDEF'; 
    let color = '#';

    for (let i = 0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * 16);
        color += digitos[randomIndex];
    }
    return color;
}

btn.addEventListener('click', () => {
    let randomColor = hexaColorGen();
    document.body.style.background = randomColor;
    color.textContent = randomColor;
});