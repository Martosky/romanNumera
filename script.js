const input = document.getElementById("inputdata");
const output = document.getElementById("output");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    const inputVal = input.value;
    
    if(inputVal === ""){
        output.textContent = "Input a valid number for conversion"
    }
})

function convertToNumera(){
    const array1 = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    const array2 = ["i", "iv", "v", "ix", "x", "xl", "l", "xc", "c", "cd", "d", "cm", "m"];
    for (let i = 0; i)
}