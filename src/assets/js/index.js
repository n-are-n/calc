const allClear = () => document.getElementById('screen').reset()
const inputValue = (num) => document.getElementById('input').value += num
const calculate = (a, b, operator) => operator === '+' ? a + b : operator === '-' ? a - b : operator === '*' ? a * b : operator === '/' ? a / b : 'Invalid Operation!'