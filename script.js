/*
Convertion Rate:
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// GETTERS
// elements
const numInput = document.getElementById("num-input")
const conversionBtn = document.getElementById("conversion-btn")
// renders
const meterToFeet = document.getElementById("meter-feet")
const literToGallon = document.getElementById("liter-gallon")
const kilogramToPound = document.getElementById("kilogram-pound")

// MAIN FUNCTION
conversionBtn.addEventListener("click", function() {
    const inputValue = Number(numInput.value)
    const meterToFeetResult = 3.281 * inputValue
    const feetToMeterResult = inputValue / 3.281
    const literToGallonResult = 0.264 * inputValue
    const gallonToLiterResult = inputValue / 0.264
    const kilogramToPoundResult = 2.204 * inputValue
    const poundTokilogramResult = inputValue / 2.204

    meterToFeet.textContent = `${inputValue} meters = ${meterToFeetResult.toFixed(3)} feet | ${inputValue} feet = ${feetToMeterResult.toFixed(3)} meters`
    literToGallon.textContent = `${inputValue} liters = ${literToGallonResult.toFixed(3)} gallons | ${inputValue} gallons = ${gallonToLiterResult.toFixed(3)} liters`
    kilogramToPound.textContent = `${inputValue} kilos = ${kilogramToPoundResult.toFixed(3)} pounds | ${inputValue} pounds = ${poundTokilogramResult.toFixed(3)} kilos`
})