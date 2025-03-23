const input = document.getElementById("inputdata");
const output = document.getElementById("output");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    const inputVal = input.value;
    
    if(inputVal !== ""){
        output.textContent = convertToNumera(inputVal)
        
    }else{
        output.textContent = "Input a valid number for conversion"
    }
})

function convertToNumera(num){
    const array1 = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const array2 = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let result = '';
  
    for (let i = 0; i < array1.length; i++){
        while (num >= array1[i]){
           result += array2[i]
           num -= array1[i]
        }
    }
    return result
}