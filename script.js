function validate() {
    let inputTemp = parseFloat(document.getElementById('addTemp').value);
    let output = 0;
    let outOutput = document.getElementById('output');
    var ddl = document.getElementById("cardtype");
    var selectedValue = ddl.options[ ddl.selectedIndex ].value;
    if (selectedValue == "selectcard") {
        alert("Please select a card type");
    }
    else {
        if (selectedValue === 'F-C') {
            output = ((5 / 9) * (inputTemp - 32));
            outOutput.innerText = `Output from ${inputTemp} °Fahrenheit to °Celsius is : ${output.toFixed(2)}`;
        }
        else if (selectedValue === 'C-F') {
            output = (((9 * inputTemp) / 5) + 32);
            outOutput.innerText = `Output from ${inputTemp} °Celsius to °Fahrenheit is : ${output.toFixed(2)}`;
        }
        else if (selectedValue === 'K-C') {
            output = (inputTemp - 273.15);
            outOutput.innerText = `Output from ${inputTemp} °Kelvin to °Celsius is : ${output.toFixed(2)}`;
        }
        else if (selectedValue === 'C-K') {
            output = (inputTemp + 273.15);
            outOutput.innerText = `Output from ${inputTemp} °Celsius to °Kelvin is : ${output.toFixed(2)}`
        }
        else if (selectedValue === 'F-K') {
            output = (((5 / 9) * (inputTemp - 32)) + 273.15)
            outOutput.innerText = `Output from ${inputTemp} °Fahrenheit to °Kelvin is : ${output.toFixed(2)}`
        }
        else if (selectedValue === 'K-F') {
            output = (((9 / 5) * (inputTemp - 273.15)) + 32)
            outOutput.innerText = `Output from ${inputTemp} °Kelvin to °Fahrenheit is : ${output.toFixed(2)}`;
        }
        else {
            outOutput.innerText = 'choose any option'
        }
    }
}