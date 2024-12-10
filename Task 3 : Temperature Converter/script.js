document.getElementById('convert-btn').addEventListener('click', function () {
  const input = document.getElementById('temperature').value;
  const unit = document.getElementById('unit').value;
  const resultDiv = document.getElementById('result');

  // Validate input
  if (isNaN(input) || input.trim() === "") {
    resultDiv.innerText = "Please enter a valid number!";
    return;
  }

  const temperature = parseFloat(input);
  let converted = "";
  let convertedUnit = "";

  // Perform conversion
  switch (unit) {
    case "Celsius":
      converted = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)}, Kelvin: ${(temperature + 273.15).toFixed(2)}`;
      convertedUnit = "°F and K";
      break;
    case "Fahrenheit":
      converted = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)}, Kelvin: ${((temperature - 32) * 5/9 + 273.15).toFixed(2)}`;
      convertedUnit = "°C and K";
      break;
    case "Kelvin":
      converted = `Celsius: ${(temperature - 273.15).toFixed(2)}, Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}`;
      convertedUnit = "°C and °F";
      break;
    default:
      converted = "Invalid unit!";
  }

  // Display result
  resultDiv.innerHTML = `Converted Temperature: <strong>${converted}</strong>`;
});

