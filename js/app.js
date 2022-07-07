let numCount = document.getElementById("num");
let value =1;
let btnInc = document.querySelector(".inc");
let btnDec = document.querySelector(".dec");
let btnReset = document.querySelector(".reset");
btnInc.addEventListener("click", () => {
    value++;
    numCount.textContent = value;
});
btnDec.addEventListener("click", () => {
    if(value>1){
        value--;
        numCount.textContent = value;
    }
    else{
        value=1
    }
});



 