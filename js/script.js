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



var daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames=["Akosua","Adowa","Abenaa","Akua","Yaa","Afua","Ama"];

