document.addEventListener('DOMContentLoaded', function() {
    var amountInput = document.getElementById('amount');
    var result = document.getElementById('result');
    var rates = {
        USD: 0.012, 
        EUR: 0.011, 
        CNY: 0.085  
    };

    function customRound(number, digits) {
        const power = 10 ** digits;
        return Math.round(number * power) / power;
    }

    function convertCurrency() {
        var amount = parseFloat(amountInput.value);

        if (!isNaN(amount) && amount >= 0) {
            var convertedAmount = amount * rates.USD;
            result.innerHTML = convertedAmount + ' USD';
        } else {
            result.innerHTML = '';
        }
    }

    amountInput.addEventListener('input', convertCurrency);
});