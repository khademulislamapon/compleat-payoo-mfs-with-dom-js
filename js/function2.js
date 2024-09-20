function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue);

    return inputNumber;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = Number(textValue);

    return textNumber;
}

function getFeatureById(id) {
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('transfer-money-section').classList.add('hidden');
    document.getElementById('transactions-section').classList.add('hidden');
    // document.getElementById('').classList.add('hidden');
    // document.getElementById('').classList.add('hidden');

    document.getElementById('divider-id').classList.remove('hidden');

    const showFeature = document.getElementById(id).classList.remove('hidden');

    return showFeature;
}