function getInputValue(type) {
    const fieldName = document.getElementById(type + '-input');
    const inputValue = parseFloat(fieldName.value);
    return inputValue;

}

function getResultField(elementId) {
    const resultField = document.getElementById(elementId);
    return resultField;
}



//click handler for calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeValue = getInputValue('income');
    const foodValue = getInputValue('food');
    const rentValue = getInputValue('rent');
    const clothesValue = getInputValue('clothes');
    const totalExpenses = foodValue + rentValue + clothesValue;
    getResultField('total-expenses').innerText = totalExpenses;
})