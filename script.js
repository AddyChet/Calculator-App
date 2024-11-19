const numBtn = document.querySelectorAll(".btn-num");
const input = document.getElementById("input");

function updateInput(value) {
  if (input.value === "Error") {
    input.value = "";
  }
  input.value += value;
}

numBtn.forEach((button) => {
  button.addEventListener("click", () => {
    //When clicked, values inside input bar will clear
    if (button.innerText === "AC") {
      input.value = "";
    }
    //when clicked, values will be deleted starting from end
    else if (button.innerText === "DEL") {
      input.value = input.value.slice(0, -1);
    } else if (button.innerText !== "=") {
      //updating input and clearing if there is Error text
      updateInput(button.innerText);
    }
    //setting a condition for "=" so that it will evaluate instead of being shown in input bar
    else {
      try {
        // checking conditions

        if (input.value !== "" && input.value !== "Error") {
          
          if (!input.value.includes("%")) {
            input.value = eval(input.value);
          } else {
            const modifiedExpression = input.value.replace(
              /(\d+)%/g,
              "($1 / 100) *"
            );
            input.value = eval(modifiedExpression);
          }
        } else {
          input.value = 0;
        }
      } catch (error) {
        input.value = "Error";
      }
    }
  });
});
