// Common Shared functions here
// console.log('Common Shared function')

/* function getInputFieldValueById() {

    const addMoney = document.getElementById('add-money').value;
    return addMoney;
} */

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;

    return inputValue;
}