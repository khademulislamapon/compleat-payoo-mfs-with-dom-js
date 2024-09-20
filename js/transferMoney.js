document.getElementById('btn-transfer-money').addEventListener('click', function(event) {
    event.preventDefault();

    const myBalance = getTextFieldValueById('my-balance');
    const transferMoney = getInputFieldValueById('transfer-money')
    const pinNumb = getInputFieldValueById('pin-numb')

    if(pinNumb === 1230){
        const curentAmount = myBalance - transferMoney;

        document.getElementById('my-balance').innerText = curentAmount;
    }else{
        alert('Failed to out the money.')
    }
});