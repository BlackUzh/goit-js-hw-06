function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector('#boxes');
  let size = 30;

  // очистити контейнер перед створенням нових елементів
  boxes.innerHTML = '';

  for (let i = 0; i < amount; i+=1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxes.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  const boxes = document.querySelector('#boxes');
  boxes.innerHTML = '';

  // очистити інпут
  const input = document.querySelector('input');
  input.value = '';
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  const amount = Number(document.querySelector('input').value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);
