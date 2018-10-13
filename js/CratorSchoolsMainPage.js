let userName = prompt("What Is Your Name?: ");
if(userName != null){
  document.getElementById("userNameDisplay").innerHTML = "Welcome, " + userName;
}
else{
  document.getElementById("userNameDisplay").innerHTML = "Welcome, User!";
}
