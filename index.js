const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");


const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkBtn.addEventListener("click", ()=> {
    var billAmt = Number(billAmount.value);
    var cashAmt = Number(cashGiven.value);
    hideMsg();
    if (billAmt > 0) {
        if (cashAmt > billAmt) {
            const amountToBeReturned = cashAmt - billAmt;
            calculateChange(amountToBeReturned);
            var retAmt = "Return  ₹"+ amountToBeReturned;
            showMsg(retAmt);
        } 
        else if(billAmt <=0 || cashAmt <=0){
            showMsg("Please enter the cash given  and value must be > 0");
        }
        else if (cashAmt == billAmt) {
            showMsg("No change required");
        } 
        else if(cashAmt == 0){
            // changeTable.style.display="none";
            showMsg("Please enter the Cash given and amount should be greater than 0");
        }
        else {
            showMsg("Please...Pay the full bill amount");
        }

    } else {
        showMsg("Enter the Bill amount and amount should be greater than 0");
    }
});

function calculateChange(amountToBeReturned) {
    for (var i = 0; i < availableNotes.length; i++) {
        var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMsg() {
    message.style.display = "none";
}

function showMsg(msg) {
    message.style.display = "block";
    message.innerText = msg;
}