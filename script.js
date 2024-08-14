const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#keys button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonValue = buttons[i].textContent;

    if (buttonValue === "C") {
      display.value = "";
    } else if (buttonValue === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += buttonValue;
    }
  });
}
