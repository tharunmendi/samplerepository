var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "MYEMP" && password == "Pakricorn@123"){
alert ("Login successfully");
//window.location = "homepage.html"; // Redirecting to home page.
return false;
}
else{
attempt --;// Decrementing by one.
// alert("send to mail;");
alert("You have left "+attempt+" attempt;");
// alert("send to mail;");
// alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.


if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}

}
}
