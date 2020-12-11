// Toggle between show and hide password
function password1() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//Validating Email
function validateEmail(){
	var email = document.getElementById("email").value;
	var p = document.getElementById("emailP");
	var emailPattern = /^[a-zA-Z0-9._-]+@tcs.com$/;
	if(emailPattern.test(email)){
		p.innerHTML = "";
		return true;
	}
	else{
		p.innerHTML = "Enter Correct Email-Id.";
		document.getElementById("email").focus();
		return false;	
	}
}

//Validating Password
function validatePass(){
	var pass = document.getElementById("pass").value;
	var passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	var p = document.getElementById("passP");
	if(passPattern.test(pass)){
		p.innerHTML = "";
		return true;
	}
	else{
		p.innerHTML = "Enter Password matching the criteria.";
		document.getElementById("pass").focus();
		return false;	
	}
}

//Validating Cost Center Number
function validateCc(){
	var cc = document.getElementById("cc").value;
	var letter = /[a-zA-Z]/; 
    var number = /[0-9]/;
    var valid = number.test(cc) && letter.test(cc);
	var p = document.getElementById("ccP");
	if(valid){
		p.innerHTML = "";
		return true;
	}
	else{
		p.innerHTML = "Enter correct Cost Center number.";
		document.getElementById("cc").focus();
		return false;	
	}
}

//Validating No of member
function validateMember(){
	var member = document.getElementById("member").value;
	var p = document.getElementById("memberP");
	if(member>0 && member<=8){
		p.innerHTML = "";
		return true;
	}
	else{
		p.innerHTML = "Enter correct number of Member.";
		document.getElementById("member").focus();
		return false;	
	}
}

//Validating Emp ID
function validateEmp(){
	var empno = document.getElementById("empno").value.length;
	var p = document.getElementById("empP");
	if(empno==7){
		p.innerHTML = "";
		return true;
	}
	else{
		p.innerHTML = "Enter correct Employee ID.";
		document.getElementById("empno").focus();
		return false;	
	}
}

//Validating DOB
function validateAge(){
	var date1 = new Date();
    var dob= document.getElementById("dob").value;
    var p = document.getElementById("dobP");
    var date2=new Date(dob);
    //var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/; //Regex to validate date format (dd/mm/yyyy)
    //var pattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/; //Regex to validate date format (dd/mm/yyyy)
    var diff = (date1.getTime() - date2.getTime())/1000;
    diff /= (60 * 60 * 24);
    diff=diff/365.25;
    if (diff>=18) 
    {
        p.innerHTML = "";
		return true;
    } 
    else 
    {
        p.innerHTML = "Sorry, You are Below 18 years old.";
        document.getElementById("dob").focus();
        return false;
    }
}

//Validating Start Date
function validateStartDate(){
	var startdate = document.getElementById("startdate").value;
	var startdate1 = new Date(startdate);
	var p = document.getElementById("startdateP");
	var dateCheck = startdate1.getDay();
	if(dateCheck != 6 && dateCheck != 0){
		p.innerHTML = "";
		return true;
	}
	else{
		p.innerHTML = "Invalid Start Date. It's weekend.";
		document.getElementById("startdate").focus();
        return false;
	}
}

//Validating End Date
function validateEndDate(){
	var startdate = document.getElementById("startdate").value;
	var enddate = document.getElementById("enddate").value;
	var enddate1 = new Date(enddate);
	var p = document.getElementById("enddateP");
	var dateCheck = enddate1.getDay();
	if(dateCheck != 6 && dateCheck != 0)
	{
		var date1 = new Date(startdate);
		var date2 = new Date(enddate);
		var diffTime = date2.getTime() - date1.getTime();
		var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
		if (diffDays>=0) 
		{
			p.innerHTML = "";
			return true;
		}
		else
		{
			p.innerHTML = "End Date can't be less than Start Date.";
			document.getElementById("enddate").focus();
			return false;
		}	
	}
	else
	{
		p.innerHTML = "Invalid End Date. It's weekend.";
		document.getElementById("enddate").focus();
        return false;
	}
}

//Validating End Time
function ValidateEndTime(){
	var startdate = document.getElementById("startdate").value;
	var enddate = document.getElementById("enddate").value;
	var p = document.getElementById("endtimeP");
	var date1 = new Date(startdate);
	var date2 = new Date(enddate);
	var diffTime = date2.getTime() - date1.getTime();
	var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	var valuestart = document.getElementById("starttime").value;
	var valuestop = document.getElementById("endtime").value;
	var timeStart = new Date("01/01/2007 " + valuestart).getHours();
	var timeEnd = new Date("01/01/2007 " + valuestop).getHours();
	var hourDiff = timeEnd - timeStart;
	if (diffDays==0 && hourDiff<=0) {
		p.innerHTML = "Invalid End Time.";
		document.getElementById("endtime").focus();
        return false;
	}
	else{
		p.innerHTML = "";
		return true;
	}
}

//Calculating Total
function calculateTotal(){
	var workingday = document.getElementById("workingday").value;
	var p = document.getElementById("billP");
	var total = workingday * 8.8 * 30;
	document.getElementById("bill").value = total;
	if (total<2500) {
		p.innerHTML = "Not Eligile for the Award Nomination.";
	}
	else{
		p.innerHTML = "";
	}
}

//Validating the Validation
function val(){
	if (validatePass() && validateEmail() && validateCc() && validateStartDate() && validateEndDate() 
		&& ValidateEndTime() && validateAge() && validateMember() && validateEmp()) 
	{
		window.alert("Congratulation! Every Validation Passed.");

		var email = document.getElementById("email").value;
		var pass = document.getElementById("pass").value;
		var cc = document.getElementById("cc").value;
		var startdate = document.getElementById("startdate").value;
		var enddate = document.getElementById("enddate").value;
		var starttime = document.getElementById("starttime").value;
		var endtime = document.getElementById("endtime").value;
		var phone = document.getElementById("phone").value;
		var dob= document.getElementById("dob").value;
		var member = document.getElementById("member").value;
		var empno = document.getElementById("empno").value;
		var workingday = document.getElementById("workingday").value;
		var bill = document.getElementById("bill").value;
		window.alert("Email: "+email +"\n"+
					 "Password: "+pass +"\n"+
					 "Cost Center Number: "+cc +"\n"+
					 "Start Date: "+startdate +"\n"+
					 "End Date: "+enddate +"\n"+
					 "Start Time: "+starttime +"\n"+
					 "End Time: "+endtime +"\n"+
					 "Mobile: "+phone +"\n"+
					 "DOB: "+dob +"\n"+
					 "No of Member: "+member +"\n"+
					 "Employee Number: "+empno +"\n"+
					 "Working Day: "+workingday +"\n"+
					 "Total Bill: "+bill 
			);
		localStorage.clear();
		localStorage.setItem('email', email);
		localStorage.setItem('password', pass);
		localStorage.setItem('cc', cc);
		localStorage.setItem('startdate', startdate);
		localStorage.setItem('enddate', enddate);
		localStorage.setItem('starttime', starttime);
		localStorage.setItem('endtime', endtime);
		localStorage.setItem('phone', phone);
		localStorage.setItem('dob', dob);
		localStorage.setItem('member', member);
		localStorage.setItem('empno', empno);
		localStorage.setItem('workingday', workingday);
		localStorage.setItem('bill', bill);
		return true;
	}
	else{
		window.alert("Sorry! Some Validation Failed.");
		return false;
	}
}