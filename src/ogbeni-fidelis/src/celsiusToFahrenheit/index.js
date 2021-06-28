//This function takes in one number type as its parameter
//The function converts convert from Celsius to Fahrenheit.
//The formular to convert to fahrenheit is "temperature in Celsius times 9 / 5, plus 32".

function convertToFahrenheit (celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

let display ={
    newline:"\r\n",
result1: convertToFahrenheit(-30),
result2:convertToFahrenheit(-10)
}
alert(`${display.result1}, ${display.newline},${display.result2}`);
