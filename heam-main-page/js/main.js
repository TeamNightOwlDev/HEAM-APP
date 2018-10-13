
//Asks The user For His/Her name. Will be Replaced WIth Login Page
let userName = prompt("What Is Your Name?: ");
if(userName != null){
  document.getElementById("userNameDisplay").innerHTML = "Welcome, " + userName;
}
else{
  document.getElementById("userNameDisplay").innerHTML = "Welcome, User!";
}