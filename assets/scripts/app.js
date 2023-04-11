const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const getUserNumberInput = () => {
	return parseInt(usrInput.value);
};

const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
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

const calculate = (operation) => {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	let operator;
	if (operation === "ADD") {
		currentResult += enteredNumber;
		operator = "+";
	} else if (operation === "SUBTRACT") {
		currentResult -= enteredNumber;
		operator = "-";
	} else if (operation === "MULTIPLY") {
		currentResult *= enteredNumber;
		operator = "*";
	} else {
		currentResult /= enteredNumber;
		operator = "/";
	}
	createAndWriteOutput(operator, initialResult, enteredNumber);
	writeToLog(operation, initialResult, enteredNumber, currentResult);
};

addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
