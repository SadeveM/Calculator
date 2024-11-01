const eqDisplay = document.querySelector("#eq-display")
const ansDisplay = document.querySelector("#ans-display");

function append(input) {
    ansDisplay.value += input;
}

function clearDis() {
    ansDisplay.value = "";

}

function delChar() {
    let display = ansDisplay.value;
    ansDisplay.value = display.slice(0, -1);
}

