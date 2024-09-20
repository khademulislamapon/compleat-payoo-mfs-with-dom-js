document.getElementById('btn-cash-out').addEventListener('click', function(event) {
    event.preventDefault();

    const myBalance = getTextFieldValueById('my-balance');
    const cashOut = getInputFieldValueById('cash-out');
    const pinNum = getInputFieldValueById('pin-num');

    if(myBalance < cashOut){
        alert ('You do not have enough money to cash out')
        return ;
    }
    if(pinNum === 1230){
        const newBalance = myBalance - cashOut;

        document.getElementById('my-balance').innerText = newBalance;

        const div = document.createElement('div');
        div.classList.add('bg-orange-600');
        div.innerHTML = `
            <h1>Cash Out</h1>
            <p>${cashOut} Withdraw. Balance ${newBalance}</p>
        `;
        document.getElementById('transaction-container').appendChild(div);
    }else{
        alert('Failed to out the money.')
    }
});