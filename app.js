var result;
var NumberA;
var operacion;
var NumberB;

function saveNumberA() {
	if (result) {
		NumberA = result;
	} else {
		NumberA = document.getElementById('input').valueAsNumber;
		console.log(NumberA);
	}

	document.getElementById('input').value = null;
}

function sum() {
	saveNumberA();

	operacion = '+';
}

function substract() {
	saveNumberA();
	operacion = '-';
}

function divide() {
	saveNumberA();
	operacion = '/';
}

function multiply() {
	saveNumberA();
	operacion = 'x';
}

document.getElementById('sum').addEventListener('click', sum);
document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('substract').addEventListener('click', substract);
document.getElementById('divide').addEventListener('click', divide);

function igual() {
	NumberB = document.getElementById('input').valueAsNumber;
	console.log(NumberB);
	switch (operacion) {
		case '+':
			result = NumberA + NumberB;
			break;
		case '-':
			result = NumberA - NumberB;
			break;
		case 'x':
			result = NumberA * NumberB;
			break;
		case '/':
			result = NumberA / NumberB;
			break;
	}
	if (result == undefined) {
		document.getElementById('result').innerHTML = NumberB;
	}
	document.getElementById('input').value = null;
	console.log(result);
}

document.getElementById('equal').addEventListener('click', igual);
