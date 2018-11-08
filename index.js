function Difference(){
	var d1 = document.getElementById("startdate").value;
	var d2 = document.getElementById("enddate").value;

	var validatedate1 = validateDate(d1);
	var validatedate2 = validateDate(d2);

	var temp = d1.split("/");
	var temp2 = d2.split("/");

		
	if(validatedate1 == true && validatedate2 == true){
		
		var date1 = new Date(temp[2], temp[1]-1, temp[0]);
		var date2 = new Date(temp2[2], temp2[1]-1, temp2[0]);

		var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24)); 
		
		if(diffDays<0){
			alert("please correct the latest date");
		}
		else{
		var div = document.getElementById("container");
		
		div.innerHTML += d1 + '   ' + d2 + '   ' + diffDays+'days';
	}
  }	
}


function validateDate(dateStr){
	
	var datePat = /^(\d{2,2})(\/)(\d{2,2})\2(\d{4}|\d{4})$/;
	var matchArray = dateStr.match(datePat);
 	if (matchArray == null) {
  	alert("Date must be in DD/MM/YYYY format")
  	return false;
 }
 	var temp = dateStr.split("/");

	month = temp[1]; // parse date into variables
 	day = temp[0];
 	year = temp[2];
 	
 	if (month < 0 || month > 12) { // check month range
  	alert("Month must be between 1 and 12");
  	return false;
 }
 	if (day < 1 || day > 31) {
  	alert("Day must be between 1 and 31");
  	return false;
 }
 	if ((month==4 || month==6 || month==9 || month==11) && day==31) {
  	alert("Month "+month+" doesn't have 31 days!")
  	return false;
 }
 	if (month == 2) { // check for february 29th
  	var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
  	if (day>29 || (day==29 && !isleap)) {
   	alert("February " + year + " doesn't have " + day + " days!");
   	return false;
    }
 }
 	return true;
}


