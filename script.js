const input = document.getElementById("inputdata");
const output = document.getElementById("output");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    const inputVal = input.value;
    
    if(inputVal === ""){
        output.textContent = "Input a valid number for conversion"
    }
})