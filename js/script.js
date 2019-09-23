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




