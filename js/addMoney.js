// console.log('add money js')

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    /* // getInputFieldValueById();
    const addMoney = getInputFieldValueById();
    console.log('add money value', addMoney) */

    const addMoney = getInputFieldValueById('add-money');
    console.log('add money', addMoney)

    const pinNumber = getInputFieldValueById('pin-number');
    console.log('pin number', pinNumber)
});