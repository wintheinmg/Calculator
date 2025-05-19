let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let currentValue = "";
let previousValue = "";
let operator = "";

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let value = button.getAttribute("data-value"); // 7

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      previousValue = currentValue;
      currentValue = "";
      operator = value;
    } else if (button.id === "clear") {
      previousValue = "";
      currentValue = "";
      operator = "";
      display.innerText = "0";
    } else if (button.id === "equal") {
      let result = calculate(previousValue, currentValue, operator);
      display.innerText = result;
      currentValue = result;
      previousValue = "";
      operator = "";
    } else {
      currentValue = currentValue + value; // currentValue = ""
      display.innerText = currentValue;
    }
  });
});

function calculate(firstNum, secondNum, operator) {
  firstNum = parseFloat(firstNum); // "4" => 4
  secondNum = parseFloat(secondNum);
  console.log(firstNum, secondNum);
  let answer = "";
  switch (operator) {
    case "+":
      answer = firstNum + secondNum;
      break;
    case "-":
      answer = firstNum - secondNum;
      break;
    case "*":
      answer = firstNum * secondNum;
      break;
    case "/":
      answer = firstNum / secondNum;
      break;
    default:
      break;
  }
  return answer;
}
