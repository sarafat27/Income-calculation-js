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
    //showing total expenses
    const foodValue = getInputValue('food');
    const rentValue = getInputValue('rent');
    const clothesValue = getInputValue('clothes');
    const totalExpenses = foodValue + rentValue + clothesValue;
    getResultField('total-expenses').innerText = totalExpenses;
    //showing balance
    const incomeValue = getInputValue('income');
    const balance = incomeValue - totalExpenses;
    getResultField('total-balance').innerText = balance;

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
    const remainingBalance = balance - savingAmount;
    getResultField('remaining-balance').innerText = remainingBalance;
})

