 function calc() {
    var entry = document.getElementById('entry_price').value;
    var leverage = document.getElementById('leverage').value;
    var roe = document.getElementById('desired_roe').value;
    var val_1 = (roe/100) / leverage;
    var val_2 = val_1 + 1;
    var val_3 = (val_2 * entry).toFixed(2);
    document.getElementById('calc_value').innerHTML = 'val_3';

    document.getElementById('calc_type').innerHTML = '💎&nbsp;&nbsp;Exit At';

    return false;
};

 function liq_calc() {
     let margin = document.getElementById('initial_margin').value;
     let entry = document.getElementById('entry_price').value;
     let leverage = document.getElementById('leverage').value;
     let pos_size = ((leverage * margin) / entry);
     let margin_ratio = 0.005;
     let liq_price = ((margin - pos_size * entry)/(pos_size * margin_ratio - pos_size)).toFixed(2);
     document.getElementById('liq_input').value = liq_price;


     return false;
 }

 function lev_calc() {
     let margin = document.getElementById('initial_margin').value;
     let entry = document.getElementById('entry_price').value;
     let liqu_price = document.getElementById('liq_price').value;
     let leverage = document.getElementById('leverage').value;
     let pos_size = ((leverage * margin) / entry);
     let margin_ratio = 0.005;
     let liq_price = ((margin - pos_size * entry)/(pos_size * margin_ratio - pos_size)).toFixed(2);
     document.getElementById('leverage').innerHTML = lev;

     return false;
 }