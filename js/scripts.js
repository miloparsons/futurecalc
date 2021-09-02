 function calc() {
    var entry = document.getElementById('entry_price').value;
    var leverage = document.getElementById('leverage').value;
    var roe = document.getElementById('desired_roe').value;
    var val_1 = (roe/100) / leverage;
    var val_2 = val_1 + 1;
    var val_3 = "$" + Number(Math.round((val_2 * entry) +'e5')+'e-5');
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
     const liq_price = "~ $" + Number(Math.round(margin - pos_size * entry)/(pos_size * margin_ratio - pos_size));
     document.getElementById('calc_type').innerHTML = '📉&nbsp;&nbsp;Liquidation Price';
     document.getElementById('calc_value').innerHTML = liq_price;

     return false;
 }