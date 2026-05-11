const display = document.getElementById('display');
const history = document.getElementById('history');

const themeToggle = document.getElementById('themeToggle');

const body = document.body;

// Alternar tema

themeToggle.addEventListener('click', () => {

  body.classList.toggle('light-mode');

  if(body.classList.contains('light-mode')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }

});

// Adicionar valor

function appendValue(value) {

  display.value += value;

}

// Limpar display

function clearDisplay() {

  display.value = '';

}

// Remover último caractere

function deleteLast() {

  display.value = display.value.slice(0, -1);

}

// Calcular resultado

function calculate() {

  try {

    const expression = display.value;

    const result = eval(expression);

    history.textContent = `${expression} =`;

    display.value = result;

  } catch {

    display.value = 'Erro';

  }

}

// Suporte teclado

document.addEventListener('keydown', (event) => {

  const key = event.key;

  if(
    !isNaN(key) ||
    ['+', '-', '*', '/', '.', '%'].includes(key)
  ) {

    appendValue(key);

  }

  if(key === 'Enter') {

    calculate();

  }

  if(key === 'Backspace') {

    deleteLast();

  }

  if(key === 'Escape') {

    clearDisplay();

  }

});