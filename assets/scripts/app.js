const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const getUserInput = () => {
  return parseInt(userInput.value);
};

const createAndWriteLog = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
};

const writeToLog = (operationIdentifier, prevResult, operationNumber, newResult) => {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
};

const calculateResult = (calculationType) => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteLog(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
};

const add = () => {
  calculateResult("ADD");
};

const subtract = () => {
  calculateResult("SUBTRACT");
};

const multiply = () => {
  calculateResult("MULTIPLY");
};

const divide = () => {
  calculateResult("DIVIDE");
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
