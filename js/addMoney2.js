document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const myBalance = getTextFieldValueById('my-balance');
    const addMoney = getInputFieldValueById('add-money');
    const pinNumber = getInputFieldValueById('pin-number');

    if (pinNumber === 1230) {
        const updateBalance = myBalance + addMoney;

        document.getElementById('my-balance').innerText = updateBalance;

        const paragraph = document.createElement('p');
        paragraph.innerText = `
            Add Money: ${addMoney} TK. Update Balance: ${updateBalance}
        `;

        document.getElementById('transaction-container').appendChild(paragraph);
    } else {
        alert('Failed to add the money.');
    }
});
