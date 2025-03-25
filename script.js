const input = document.getElementById("inputdata");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", ()=>{
    const inputVal = input.value;

    if(inputVal === ""){
      output.textContent = "Type in a valid number";
    }else if(inputVal >= 4000){
        output.textContent = "Input a number within the 1 to 3999";
    }else{
        output.textContent = convertToRoman(inputVal)
    }
})

function convertToRoman(num){
    const numberArr = [
        {number: 1000, value: "m"},
        {number: 900, value: "cm"},
        {number: 500, value: "d"},
        {number: 400, value: "cd"},
        {number: 100, value: "c"},
        {number: 90, value: "xc"},
        {number: 50, value: "l"},
        {number: 40, value: "xl"},
        {number: 10, value: "x"},
        {number: 9, value: "ix"},
        {number: 5, value: "v"},
        {number: 4, value: "iv"},
        {number: 1, value: "i"}
    ]
    let result = "";

    for (let i = 0; i < numberArr.length; i++){
        while(num >= numberArr[i].number){
         result += numberArr[i].value.toUpperCase();
         num -= numberArr[i].number
        }
    }
    return result
}