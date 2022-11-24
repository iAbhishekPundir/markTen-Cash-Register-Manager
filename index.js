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
        } else if (cashAmt == billAmt) {
            showMsg("No change required");
        } else {
            changeTable.style.display="none";
            showMsg("Cash given should be greater than or equal to the bill amount.")
        }

    } else {
        showMsg("Invalid Bill Amount");
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