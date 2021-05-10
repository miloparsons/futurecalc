 function calc() {
    var entry = document.getElementById('entry_price').value;
    var leverage = document.getElementById('leverage').value;
    var roe = document.getElementById('desired_roe').value;
    var val_1 = (roe/100) / leverage;
    var val_2 = val_1 + 1;
    var val_3 = Number(Math.round((val_2 * entry) +'e5')+'e-5');
    document.getElementById('exit_at').innerHTML = val_3;

    console.log(`Entry = ${entry}`);
    console.log(`Leverage = ${leverage}`);
    console.log(`ROE = ${roe}`);
    console.log(`Val 1 = ${val_1}`);
    console.log(`Val 2 = ${val_2}`);
    console.log(`Val 3 = ${val_3}`);
    return false;
}