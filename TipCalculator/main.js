function calculate() {
    let amount = $('#amount').val();
    let percantage = $('#percantage').val();
    let tip = amount * (percantage / 100);
    let total = Number(amount) + tip;

    $('#calculator').submit(Calculate);
    $('#tip').val(tip.toFixed(2));
    $('#total').val(total.toFixed(2));


};