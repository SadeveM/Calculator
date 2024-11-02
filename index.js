const eqDisplay = document.querySelector("#eq-display")
const ansDisplay = document.querySelector("#ans-display");
const buttons = document.querySelectorAll("button");

function append(input) {
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
}

document.addEventListener("keydown", (event) => {
    for (let button of buttons) {
        if (button.classList.contains(event.key)) {
            button.click();
        }
    }
})


