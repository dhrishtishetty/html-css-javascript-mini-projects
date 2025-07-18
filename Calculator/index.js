var display = document.getElementById("display");

function append(val) {
    display.value += val; //display.value stores the val 
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(e) {
        alert("Invalid Expression");
        display.value = " ";
    }
}

function clearDisplay() {
    display.value = " ";
}