document.addEventListener("DOMContentLoaded", function() {
    let calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", function() {

      let num1 = Number(document.getElementById("num1").value);
      let num2 = Number(document.getElementById("num2").value);
      let operador = document.getElementById("operador").value;
      let resultElement = document.getElementById("result");
      let result;
  
      switch (operador) {
        case "suma":
          result = num1 + num2;
          break;
        case "resta":
          result = num1 - num2;
          break;
        case "mul":
          result = num1 * num2;
          break;
        case "div":
          result = num1 / num2;
          break;
        default:
          result = "Error";
      }
  
      resultElement.textContent = "Resultado: " + result;
    });
  });