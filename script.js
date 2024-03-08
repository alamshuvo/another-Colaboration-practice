const subhanallahIncrementBtn = document.getElementById("subhanallah-increment-btn");
const subhanallahDecrementBtn = document.getElementById("subhanallah-decrement-btn");
const alhamdullihaIncrementBtn = document.getElementById("alhamdulliha-increment-btn");
const alhamdullihaDecrementBtn = document.getElementById("alhamdulliha-decrement-btn");
const allahuakbarIncrementBtn = document.getElementById("allahuakbar-increment-btn");
const allahuakbarDecrementBtn = document.getElementById("allahuakbar-Decrement-btn");

// count
const subhanallahCount = document.getElementById("subhanallah-count");
const alhamdullihaCount = document.getElementById("alhamdulliha-count");
const allahuakbarCount = document.getElementById("allahuakbar-count");

// reset
const reset = document.getElementById("reset");

let subhanallahInitialValue = 0;
let alhamdullihaInitialValue = 0;
let allahuakbarInitialValue = 0;

subhanallahIncrementBtn.addEventListener("click", function(){
    if (subhanallahInitialValue === 33) {
        return alert("Your Subhanallah Is Complete");
    }
    subhanallahInitialValue +=1
    subhanallahCount.innerText = subhanallahInitialValue;
})
subhanallahDecrementBtn.addEventListener("click", function(){
    if(subhanallahInitialValue === 0){
        return alert("Can't Put Negative Number");   
    }
    subhanallahInitialValue -=1
    subhanallahCount.innerText = subhanallahInitialValue;
})

reset.addEventListener("click", function(){
    subhanallahCount.innerText = 0;
    subhanallahInitialValue = 0;
})