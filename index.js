const eqDisplay = document.querySelector("#eq-display")
const ansDisplay = document.querySelector("#ans-display");
const buttons = document.querySelectorAll("button");
const backspaceBtn = document.querySelector(".Backspace")
let display = "";

function append(input) {
    backspaceBtn.onclick = delChar;
    display += input;
    if (display == "ERROR" || display == "Infinity"){
        ansDisplay.value = "";
    }
    ansDisplay.value = display.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,");
    ansDisplay.scrollLeft = ansDisplay.scrollWidth;

}

function clearDis() {
    ansDisplay.value = "";
    eqDisplay.value = "";
    display = ""
}

function delChar() {
    if (display == "ERROR" || display == "Infinity"){
        display = "";
        ansDisplay.value = display;
    } else {
        display = display.slice(0, -1);
        ansDisplay.value = display;
    }
}

function delAnsDis() {
    ansDisplay.value = "";
    display = "";
    backspaceBtn.onclick = delEqDis;
}

function delEqDis() {
    eqDisplay.value = "";
    backspaceBtn.onclick = delChar;
}

function calc() {
    let newDisplay = display.replace("÷", "/").replace("×", "*").replace(",", "");
    console.log(newDisplay)
    if (display == "") {
        return;
    }

    try {
        display = eval(newDisplay)
        eqDisplay.value = ansDisplay.value;
        ansDisplay.value = display;
    } catch(error) {
        ansDisplay.value = "ERROR"
    }
    
    eqDisplay.scrollLeft = eqDisplay.scrollWidth;
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
        ansDisplay.scrollLeft = ansDisplay.scrollWidth;
        eqDisplay.scrollLeft = eqDisplay.scrollWidth;
        if (button.classList.contains(event.key)) {
            button.click();
        }
    }
})


