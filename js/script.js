var century, year, month , date;

function getData(){
    century=parseInt(document.getElementById("century").value);
    year=parseInt(document.getElementById("year").value);
    month=parseInt(document.getElementById("month").value);
    date=parseInt(document.getElementById("date").value); 


if(century==0){
    alert("Please enter century");
    return false;
}else if (year<=0){
    alert("Please enter year");
    return false;
}else if (month<=0 || month>12){
    alert("Please enter month");
    return false;
}else if (date<=0 || date>31){
    alert("Please enter date");
    return false;
}


function getDay(){
    getData();
    weekDay=((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date) % 7);
    console.log(dayOfWeek);
    return(math.floor(dayOfWeek));
    if (dayOfWeek<0) {
        dayOfWeek= dayOfWeek * -1;
    }else if (dayOfWeek>0){
        return dayOfWeek;
    }
}

function checkDayOfWeek(){
    day = getDay();
     checkGender();
     console.log("The function runs");
}

var daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

function checkGender(){
    var gen = document.getElementsByName("rads");
    if(gen[0].checked == true){
        var gender = "male";
    }else if(gen[1].checked == true){
        var gender = "female";
    }else {
      console.log("pass");//Test the radio buttons
    }
  
      switch(gender){
          case gender = "male":
                switch(day){
                  case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + maleNames[0];
                  break;
                  case (1 || -1):
                    document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + maleNames[1];
                  break;
                  case (2 || -2):
                    document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + maleNames[2];
                  break;
                  case (3 || -3):
                    document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is "+ maleNames[3];
                  break;
                  case (4 || -4):
                    document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + maleNames[4];
                  break;
                  case (5 || -5):
                    document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + maleNames[5];
                  break;
                  case (6 || -6):
                    document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + maleNames[6];
                  break;
                  default:
  
                }
          break;
          case gender = "female":
                  switch(day){
                    case 0 || -0:
                      document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  akosua";
                    break;
                    case 1 || -1:
                      document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is adwoa ";
                    break;
                    case 2 || -2:
                      document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is abenaa";
                    break;
                    case 3 || -3:
                      document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is akua";
                    break;
                    case 4 || -4:
                      document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaa";
                    break;
                    case 5 || -5:
                      document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is afua";
                    break;
                    case 6 || -6:
                      document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
                    break;
  
                }
          break
          default:
          console.log("pass");
      }
  }