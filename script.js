
const inputField = document.getElementById('input');
const buttons = document.querySelectorAll('.btn');
let inputValue = '';

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent;
    if (buttonText === 'C') {
      inputValue = '';
      inputField.value = '';
    } 
    else if (buttonText === '%') {
      inputValue += '%';
      inputField.value = inputValue;
    } 
    else if (buttonText === 'del') {
      inputValue = inputValue.slice(0, -1);
      inputField.value = inputValue;
    }
    else if (buttonText === '=') {
        const result = eval(inputValue);
        inputField.value = result;
        inputValue = result;
    } 
    else {
      inputValue += buttonText;
      inputField.value = inputValue;
    }
  });
});
