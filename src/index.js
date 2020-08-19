// Inputs

const burgerButton = document.getElementById('burgerIcon');
console.log(burgerButton)
burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('change');
});
const plusButton = document.getElementById('newTaskPlus');
console.log(plusButton)
plusButton.addEventListener('click', function() {
    plusButton.classList.toggle('changeToCross');
});
const content = document.getElementById('content');
content.innerText = '';