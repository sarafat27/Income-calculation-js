//getting value of input field
function getInputValue(type) {
    const fieldName = document.getElementById(type + '-input');
    const inputValue = parseFloat(fieldName.value);
    return inputValue;

}

//getting result field
function getResultField(elementId) {
    const resultField = document.getElementById(elementId);
    return resultField;
}


//click handler for calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    //showing total expenses & total balance
    const incomeValue = getInputValue('income');
    const foodValue = getInputValue('food');
    const rentValue = getInputValue('rent');
    const clothesValue = getInputValue('clothes');
    if (isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothesValue)) {
        alert("Please give a valid number");
    }
    else if (incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothesValue < 0) {
        alert('please give a positive number')
    }
    else {
        const totalExpenses = foodValue + rentValue + clothesValue;
        if (totalExpenses > incomeValue) {
            alert('you can not spent money more than your income')
        }
        else {
            getResultField('total-expenses').innerText = totalExpenses;
            const balance = incomeValue - totalExpenses;
            getResultField('total-balance').innerText = balance;
        }
    }
});

//click handler for save button
document.getElementById('save-button').addEventListener('click', function () {
    //showing saving amount
    const savepercent = getInputValue('save');
    const incomeValue = getInputValue('income');
    const savingAmount = incomeValue * (savepercent / 100);
    getResultField('saving-amount').innerText = savingAmount;
    //showing remaining balance
    const balance = getResultField('total-balance').innerText;
    if (savingAmount > balance) {
        alert('you can not save more than your balance');
    }
    else if (savingAmount < 0) {
        alert('save percentage can not be negative');
    }
    else {
        const remainingBalance = balance - savingAmount;
        getResultField('remaining-balance').innerText = remainingBalance;
    }
})

