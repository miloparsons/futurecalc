 function calc() {
    var entry = document.getElementById('entry_price').value;
    var leverage = document.getElementById('leverage').value;
    var roe = document.getElementById('desired_roe').value;
    var val_1 = (roe/100) * leverage;
    var val_2 = val_1 + 1;
    var val_3 = val_2 * entry;
    document.getElementById('exit_at').innerHTML = val_3;
}