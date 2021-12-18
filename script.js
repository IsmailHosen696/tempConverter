function calculateTemp() {
    let inputTemp = parseFloat(document.getElementById('addTemp').value);
    let output = 0;
    let outOutput = document.getElementById('output');
    var selectedScales = document.getElementById("cardtype").value;
    if (selectedScales == "selectcard") {
        alert("Please select a card type");
    }
    else {
        if (selectedScales === 'F-C') {
            output = ((5 / 9) * (inputTemp - 32));
            outOutput.innerText = `${inputTemp} °Fahrenheit to °Celsius is : ${output.toFixed(2)}`;
        }
        else if (selectedScales === 'C-F') {
            output = (((9 * inputTemp) / 5) + 32);
            outOutput.innerText = `${inputTemp} °Celsius to °Fahrenheit is : ${output.toFixed(2)}`;
        }
        else if (selectedScales === 'K-C') {
            output = (inputTemp - 273.15);
            outOutput.innerText = `${inputTemp} °Kelvin to °Celsius is : ${output.toFixed(2)}`;
        }
        else if (selectedScales === 'C-K') {
            output = (inputTemp + 273.15);
            outOutput.innerText = `${inputTemp} °Celsius to °Kelvin is : ${output.toFixed(2)}`
        }
        else if (selectedScales === 'F-K') {
            output = (((5 / 9) * (inputTemp - 32)) + 273.15)
            outOutput.innerText = `${inputTemp} °Fahrenheit to °Kelvin is : ${output.toFixed(2)}`
        }
        else if (selectedScales === 'K-F') {
            output = (((9 / 5) * (inputTemp - 273.15)) + 32)
            outOutput.innerText = `${inputTemp} °Kelvin to °Fahrenheit is : ${output.toFixed(2)}`;
        }
        else {
            outOutput.innerText = 'choose any option'
        }
    }
}
document.getElementById("convertBtn").addEventListener('click', calculateTemp)