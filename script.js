const billAmount = document.getElementById("#bill-amount");
const cashGiven = document.getElementById("#cash-given");
const checkButton = document.getElementById("#check-button");
const message = document.getElementById("#error-message");

checkButton.addEventListener("click" , function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount.value>0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else{
            showMessage("Do you wanna wash plates?");
        }
    }
    else{
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(){

}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}

