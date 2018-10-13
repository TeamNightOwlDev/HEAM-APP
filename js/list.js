alert("The CSS For This App Is Still Being Developed");
function newListItem(){
let userItemInput = document.getElementById("userItemInput").value; //Pulls Value From Text Input
let list = document.getElementById("list"); //Gets The List Holder
let newItem = document.createElement("li"); // Creates List Litem
newItem.appendChild(document.createTextNode(userItemInput)) //Stores Input Value/Creates List Item
list.appendChild(newItem); //Places The New Item Into List Holder
document.getElementById("userItemInput").value = ""; //Deletes Previous Text In Unput Box
newItem.onclick = removeItem; //Calls Remove Function
}
function removeItem(e) {
  e.target.parentElement.removeChild(e.target); //When A User Clicks One Of The List Items, It Will Delete/ Disappear
}
