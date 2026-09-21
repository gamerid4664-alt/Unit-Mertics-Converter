

const convertBtn = document.getElementById("btn")
let Length = document.getElementById("Length")
let volume = document.getElementById("Volume")
let mass = document.getElementById("Mass")
let errorHandle = document.getElementById("error-hdl")
let ErrorHdl = document.querySelector(".desp")


convertBtn.addEventListener("click", function() {
   
   let read_value = (document.getElementById("read_value").value)
   if (read_value === "" || Number.isNaN(read_value)){
      errorHandle.textContent = "Please Enter The Value  Must Be A Number"
      ErrorHdl.textContent = ""
   }
   else{
   ErrorHdl.textContent = ""
   convertLenght(read_value)
   convertVolume(read_value)
   convertMass(read_value)
   }
})

function convertLenght(read_value) {
   let feet = (read_value * 3.28084).toFixed(2)
   let meter = (feet * 0.3048).toFixed(2)
   Length.textContent = `${read_value} Meters = ${feet} feet | ${read_value} Feet = ${meter} meters`
}

function convertVolume(read_value){
   let gallons = (read_value * 0.264172).toFixed(2)
   let liter =  (gallons * 3.78541).toFixed(2)
   volume.textContent = `${read_value} Liters = ${gallons} gallons | ${read_value} Gallons = ${liter} liters`
}
function convertMass(read_value){
   let pound = (read_value * 2.20462).toFixed(2)
   let kilogram = (pound * 0.453592).toFixed(2)
   mass.textContent = `${read_value} Kilogram = ${pound} pounds | ${read_value} Pounds = ${kilogram} kilograms`
}
