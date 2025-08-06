import './reset.css';
import './style.css';

// Code for  preferences dropdown

let preferences = document.getElementById('preferences');
let options = document.querySelector('.options');
preferences.addEventListener('click', () => {
    options.classList.toggle('open');
});

// code for enable dark or light mode
let option = options.querySelectorAll('.option');
option.forEach((op) => {
    let button = op.querySelector('button');
    button.addEventListener('click', (e) => {
        op.classList.toggle('enabled');
    });
});
