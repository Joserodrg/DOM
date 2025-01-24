document.addEventListener('DOMContentLoaded', () =>{
    const counterClick = document.getElementById('counter');
    const btn = document.getElementById('btn');
    
    let counter = 0;

    btn.addEventListener('click', () => {
        counter ++;
        counterClick.textContent = counter;
    })
})