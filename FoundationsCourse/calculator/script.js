function setRandomBG() {
	const rnd = 1 + Math.round(Math.random() * 2);
	document.body.style.backgroundImage = `url('images/bg${rnd}.jpg')`;
}

function isDigit(digit) {
	digit += "";
	return "0123456789".includes(digit) && digit.length === 1;
}

function Operator(type) {
	if (!Operator.isOperator(type)) return null;
	this.type = type;
	switch (type) {
		case "+":
			this.name = "Add";
			break;
		case "-":
			this.name = "Substract";
			break;
		case "*":
			this.name = "Multiply";
			break;
		case "/":
			this.name = "Divide";
			break;
	}
}

/**
 * JS: This is how you can declare Class variables & Class methods
 **/
Operator.operators = "-+*/";
Operator.symbolIndicators = "-+";
Operator.isOperator = function (operator) {
	return Operator.operators.includes(operator) && operator.length == 1;
}
/**
 * Note: 
 * lhs => Left Hand Side
 * rhs => Right Hand Side
 **/
Operator.prototype = {
	operate: function (lhs, rhs) {
		// console.log(this.type, lhs, rhs);
		switch (this.type) {
			case "+":
				return lhs + rhs;
			case "-":
				return lhs - rhs;
			case "*":
				return lhs * rhs;
			case "/":
				if (rhs === 0)
					return null;
				return lhs / rhs;
			default:
				return null;
		}
	},
	isHighPriority: function () {
		switch (this.type) {
			case "+":
			case "-":
				return false
			case "*":
			case "/":
				return true;
			default:
				return false;
		}
	},
}

const currentExpressionOutput = document.querySelector("#currentExpression");
function updateExpression(input) {
	input += "";
	if (!this.expression) this.expression = input
	else this.expression += input
	currentExpressionOutput.textContent = this.expression;
}

function addToBuffer(input) {
	const lastBufferItem = this.bufferArr[this.bufferArr.length - 1];
	if (Operator.isOperator(input)) {
		/**
		 * It's not valid to have more than one operator togeather:
		 * 		1 * / 3 -> is not valid
		 * But the '-' & '+' can also be symbol indicators, so:
		 * 		1 * -3  -> is valid
		 * 		+1 / -2 -> is valid
		 * Input is an indicator at the very beggining or when there is a prescedent Operator
		 */
		if (lastBufferItem instanceof Operator || !lastBufferItem) {
			if (Operator.symbolIndicators.includes(input)) {
				this.bufferArr.push(input);
				this.updateExpression(input);
			}
		} else {
			const op = new Operator(input);
			this.bufferArr.push(op);
			this.updateExpression(input);
		}
	} else if (isDigit(input)) {
		if (typeof lastBufferItem === "number" || typeof lastBufferItem === "string") {
			this.bufferArr[this.bufferArr.length - 1] = Number.parseFloat(lastBufferItem + "" + input);
		} else  {
			this.bufferArr.push(Number.parseFloat(input));
		}
		this.updateExpression(input);
	} else if (input === "." && typeof lastBufferItem === "number" && !("" + lastBufferItem).includes(".")) {
		this.bufferArr[this.bufferArr.length - 1] = lastBufferItem + input;
		this.updateExpression(input);
	}
}

/**
 * Implications:
 * 1 - The array might have errors, invalid numbers; etc.
 * 2 - The bufferArr always starts with a number (non Operator)
 * 3 - There is always a rhs and lhs for the operators inputed
 * 4 - The only case where there might not be an operator to the 
 *     rhs could be when the user inputs an operator at the end
 *     without providing a number next.
 *     This case should be taken concidered as malformed expression.
 * 5 - If any number is invalid (NaN) concider malformed expression
 * */
const currentResultOutput = document.querySelector("#currentResult");
const lastResultOutput = document.querySelector("#lastResult");
function resolve() {
	if (this.currentResult && lastResult !== "Error" && (+this.currentResult).toFixed(2) !== "NaN") lastResultOutput.textContent = (+this.currentResult).toFixed(2);

	let resolvingArr = [];
	let bufferArrCpy = [...this.bufferArr];
	let error = false;
	let result = bufferArrCpy[0];
	/**
	 * To imlpement priority rules, loop twice.
	 * The first time resolve high priority.
	 * Second time resolve low priority. 
	 */
	for (let i = 0; i < bufferArrCpy.length && !error; ++i) {
		if (bufferArrCpy[i] instanceof Operator && bufferArrCpy[i].isHighPriority()) {
			const op = bufferArrCpy[i];
			const lhs = Number.parseFloat(resolvingArr.pop());
			const rhs = Number.parseFloat(bufferArrCpy[i + 1]);
			result = op.operate(lhs, rhs);
			bufferArrCpy[i + 1] = result;
			if (!bufferArrCpy[i + 1])
				error = true;
		} else {
			resolvingArr.push(bufferArrCpy[i]);
		}
	}
	for (let i = 0; i < resolvingArr.length && !error; ++i) {
		if (resolvingArr[i] instanceof Operator) {
			const op = resolvingArr[i];
			const lhs = Number.parseFloat(resolvingArr[i - 1]);
			const rhs = Number.parseFloat(resolvingArr[i + 1]);
			result = op.operate(lhs, rhs);
			if (result === undefined || result === NaN || result === null)
				error = true;
			resolvingArr[i + i] = result;
		}
	}
	if (Number.parseFloat(result) === +result) {
		result = Number.parseFloat(result).toFixed(3); 
	}
	result = (error || result === null || result === undefined) ? "Error" : result
	currentResultOutput.textContent = "" + result;
	this.currentResult = "" + result;
}

function reset() {
	this.currentResult = null;
	this.lastResult = null;
	this.expression = "";
	this.bufferArr = [];
	currentResultOutput.textContent = "";
	lastResultOutput.textContent = "";
	currentExpressionOutput.textContent = "0";
}

function undo() {
	if (this.bufferArr.length) {
		if (this.bufferArr[this.bufferArr.length - 1] instanceof Operator) {
			this.bufferArr.pop();
		} else {
			const lastItemStr = this.bufferArr[this.bufferArr.length - 1] + "";
			this.bufferArr[this.bufferArr.length - 1] = lastItemStr.slice(0, lastItemStr.length - 1);
			if (this.bufferArr[this.bufferArr.length - 1] === "" || this.bufferArr[this.bufferArr.length - 1] === 0)
				this.bufferArr.pop();
		}
		if (this.expression)
			this.expression = this.expression.slice(0, this.expression.length - 1);
	}
	this.updateExpression("");
}

const createCalculator = () => {
	let calculator = {
		addToBuffer,
		resolve,
		reset,
		undo,
		updateExpression,
		expression: "",
		bufferArr: [],
		lastResult: null,
		currentResult: null,
	}; 
	
	for (let i = 0; i < 10; ++i) {
		document.querySelector("#operator" + i).addEventListener("click", () => {calculator.addToBuffer(i)}, false);
	}
	document.querySelector("#operatorPlus").addEventListener("click", () => {calculator.addToBuffer("+")}, false);
	document.querySelector("#operatorMinus").addEventListener("click", () => {calculator.addToBuffer("-")}, false);
	document.querySelector("#operatorDivision").addEventListener("click", () => {calculator.addToBuffer("/")}, false);
	document.querySelector("#operatorMultiply").addEventListener("click", () => {calculator.addToBuffer("*")}, false);
	document.querySelector("#operatorDot").addEventListener("click", () => {calculator.addToBuffer(".")}, false);
	document.querySelector("#operatorResult").addEventListener("click", () => {calculator.resolve()}, false);
	document.querySelector("#resetButton").addEventListener("click", () => {calculator.reset()}, false);
	document.addEventListener("keydown", (e) => {
		if (e.key === "/") e.preventDefault();
		if (e.key === "Backspace") calculator.undo();
		else if (e.key === "Enter") calculator.resolve();
		else if (e.key === "Escape") calculator.reset();
		else calculator.addToBuffer(e.key);
	}, false);
	return calculator;
}

const calculator = createCalculator();
setRandomBG();
