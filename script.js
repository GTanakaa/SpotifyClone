
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.side-bar').style.display = "none";
});

const btnInicio = document.querySelector('.inicio');
const sideBar = document.querySelector('.side-bar');
const Close = document.getElementById('close');
const btnClose = document.getElementById('btn-close');

btnInicio.addEventListener('click', () => {
    sideBar.style.display = "flex";
});


btnClose.addEventListener('click', () => {
    sideBar.style.display = "none";
});