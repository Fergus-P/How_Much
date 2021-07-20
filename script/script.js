function cost_in_hours(){
    let total_in_hours_and_minutes, cost_minutes;
    const monthly_take_home = parseInt(document.getElementById('mthp').value);
    const hours_per_month= parseInt(document.getElementById('hpw').value)*4.33;
    const pay_per_hour = monthly_take_home / hours_per_month;
    let payperhour = pay_per_hour.toFixed(2)
    total_in_hours_and_minutes = parseInt(document.getElementById('cost').value)/payperhour
    let total_in_hours = parseInt(total_in_hours_and_minutes);
    cost_minutes = parseInt((total_in_hours_and_minutes - total_in_hours)*60)
    document.getElementById("pph").innerHTML = "You get paid " + payperhour + " per hour.";
    document.getElementById("timeCost").innerHTML = "It takes you roughly " + total_in_hours + " hours and " + cost_minutes + " minutes to buy this item."
  };