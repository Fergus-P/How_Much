function cost_in_time(){
    let total_in_hours_and_minutes, cost_minutes, cost_days, cost_years ;
    
    let monthly_take_home = parseInt(document.getElementById('mthp').value);
    let hours_per_month= parseInt(document.getElementById('hpw').value)*4.33;
    let pay_per_hour = monthly_take_home / hours_per_month;
    
    
    let payperhour = pay_per_hour.toFixed(2)
    
    total_in_hours_and_minutes = parseInt(document.getElementById('cost').value)/payperhour
    
    /// Working Week Numbers ///
    /// hours a year  === 1762.5
    /// hours a month === 146.88
    /// hours a week  === 37.5
    /// hours a day   === 7.5

    let total_in_hours = parseInt(total_in_hours_and_minutes);
    if(total_in_hours > 1762.5){
      cost_years = Math.floor(total_in_hours/1762.5)
      cost_weeks = (total_in_hours%37.5)
      cost_days = (total_in_hours % 7.5);
      cost_minutes = parseInt((total_in_hours_and_minutes - total_in_hours)*60)
      total_in_hours = total_in_hours % 5;
      
      document.getElementById("pph").innerHTML = "You get paid " + payperhour + " per hour. After tax.";
      document.getElementById("timeCost").innerHTML = "It takes you roughly " +cost_years+ " years, " +cost_weeks+ " weeks, " + cost_days + " days, " + total_in_hours + " hours and " + cost_minutes + " minutes to buy this item.";

    } else if (total_in_hours > 146.88){
      cost_weeks = Math.floor(total_in_hours/37.5)
      cost_days = (total_in_hours % 7.5);
      cost_minutes = parseInt((total_in_hours_and_minutes - total_in_hours)*60)
      total_in_hours = total_in_hours % 5;
      
      document.getElementById("pph").innerHTML = "You get paid " + payperhour + " per hour. After tax.";
      document.getElementById("timeCost").innerHTML = "It takes you roughly " +cost_weeks+ " weeks, " + cost_days + " days, " + total_in_hours + " hours and " + cost_minutes + " minutes to buy this item.";

    } else if (total_in_hours > 7.5 && total_in_hours < 146.88){
      cost_days = Math.floor(total_in_hours/7.5);
      cost_minutes = parseInt((total_in_hours_and_minutes - total_in_hours)*60)
      total_in_hours = total_in_hours % 5;
      
      document.getElementById("pph").innerHTML = "You get paid " + payperhour + " per hour. After tax.";
      document.getElementById("timeCost").innerHTML = "It takes you roughly " + cost_days + " days, " + total_in_hours + " hours and " + cost_minutes + " minutes to buy this item."
    } else {
      let total_in_hours = parseInt(total_in_hours_and_minutes);
    cost_minutes = parseInt((total_in_hours_and_minutes - total_in_hours)*60)
    document.getElementById("pph").innerHTML = "You get paid " + payperhour + " per hour. After tax.";
    document.getElementById("timeCost").innerHTML = "It takes you roughly " + total_in_hours + " hours and " + cost_minutes + " minutes to buy this item.";
    };
    
    
  };
