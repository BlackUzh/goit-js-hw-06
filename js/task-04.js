let counterValue = 0;

const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');

buttonDecr.addEventListener('click', () => {
    counterValue -= 1
    document.querySelector('#value').innerHTML = counterValue
});

buttonIncr.addEventListener('click', () => {
    counterValue += 1
    document.querySelector('#value').innerHTML = counterValue
});