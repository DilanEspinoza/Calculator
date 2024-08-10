const $screen = document.querySelector(".screen");
const $buttons = document.querySelectorAll(".btn");
const $btnClear = document.getElementById("clear");
const $btnDelete = document.getElementById("delete");
const $btnEqual = document.getElementById("btn-igual");

$btnClear.addEventListener("click", clearScreen);
$btnDelete.addEventListener("click", deleteLastCharacter);
$btnEqual.addEventListener("click", calcularResultado);

$buttons.forEach((button) => {
	button.addEventListener("click", () => {
		addToScreen(button.textContent);
	});
});

function addToScreen(value) {
	if ($screen.textContent === "0") {
		deleteAll();
	}
	$screen.textContent += value;
}

function deleteAll() {
	$screen.textContent = "";
}

function clearScreen() {
	$screen.textContent = "0";
}

function deleteLastCharacter() {
	$screen.textContent = $screen.textContent.toString().slice(0, -1);
}

function calcularResultado() {
	try {
		const resultado = eval($screen.textContent);
		$screen.textContent = resultado;
	} catch (e) {
		$screen.textContent = "Error";
	}
}
