const eqDisplay = document.querySelector("#eq-display")
const ansDisplay = document.querySelector("#ans-display");
const buttons = document.querySelectorAll("button");
const backspaceBtn = document.querySelector(".Backspace")

function append(input) {
    backspaceBtn.onclick = delChar;
    let display = ansDisplay.value;
    if (display == "ERROR" || display == "Infinity"){
        ansDisplay.value = "";
    }
    ansDisplay.value += input;
}

function clearDis() {
    ansDisplay.value = "";
    eqDisplay.value = "";
}

function delChar() {
    let display = ansDisplay.value;
    if (display == "ERROR" || display == "Infinity"){
        ansDisplay.value = "";
    } else {
        ansDisplay.value = display.slice(0, -1);
    }
}

function delAnsDis() {
    ansDisplay.value = "";
    backspaceBtn.onclick = delEqDis;
}

function delEqDis() {
    eqDisplay.value = "";
    backspaceBtn.onclick = delChar;
}

function calc() {
    let display = ansDisplay.value;
    let newDisplay = display.replace("÷", "/").replace("×", "*");
    if (display == "") {
        return;
    }

    try {
        ansDisplay.value = eval(newDisplay)
        eqDisplay.value = display
    } catch(error) {
        ansDisplay.value = "ERROR"
    }

    backspaceBtn.onclick = delAnsDis;
}

backspaceBtn.addEventListener("click", () => {
    if (ansDisplay.value == "") {
        backspaceBtn.onclick = delEqDis;
    }
})

document.addEventListener("keydown", (event) => {
    for (let button of buttons) {
        button.blur();
        if (button.classList.contains(event.key)) {
            button.click();
        }
    }
})


