const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return +userInput.value;
}

function createAndWriteLog(
  operator,
  calculationType,
  resultBeforeCalc,
  calcNumber
) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
  const logEntry = {
    operation: operator,
    calculation: calculationType,
    prevResult: resultBeforeCalc,
    operand: calcNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  } else {
    return;
  }
  createAndWriteLog(
    mathOperator,
    calculationType,
    initialResult,
    enteredNumber
  );
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
