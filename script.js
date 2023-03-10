const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next-button");
const section = document.querySelector(".section");
const availableNotes = [2000,500,100,20,10,5,1];

//to hide the section below next button 
nextButton.addEventListener("click" , function hideSection(){ 
    if(billAmount.value){
        section.style.display='block';
    }else{
        alert("please enter bill amount value!");
    }

})

checkButton.addEventListener("click" , function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount.value>0){
        if(cashGiven.value >= billAmount.value){ // 2022 - 12 = 2010
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned); // 2010
        }
        else{
            showMessage("Do you wanna wash plates?");
        }
    }
    else{
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned){
   
    for(var i =0; i<availableNotes.length;i++){
         // no of notes needed for the denomination
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]); // 2010/2000 = 1 || 10/500 = 0
        // amount left after calculating the number of notes needed
        amountToBeReturned %= availableNotes[i];
        // 2010 % 2000 = 10 || 10 % 500 = 10

        //updating the no of notes in the table for the current amount
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}

