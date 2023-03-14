let result = document.getElementById("result");

function addDigit(digit) {
  result.value += digit;
}

function addDecimal() {
  if (result.value.indexOf(".") == -1) {
    result.value += ".";
  }
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function clearResult() {
  result.value = "";
}

function operate(operator) {
  result.value += operator;
}

function calculate() {
  result.value = eval(result.value);
}
