function update(){
    console.log("updated")
let naam = document.getElementById("name").value
let mail = document.getElementById("email").value
let ptaa = document.getElementById("address").value
let seher = document.getElementById("city").value
let states = document.getElementById("state").value
let pin = document.getElementById("code").value
// let cc = document.getElementById("card").value
// let expm = document.getElementById("month").value
// let expy = document.getElementById("year").value
// let cvvno = document.getElementById("cvv").value
if(localStorage.getItem("itemJson")==null){
    itemJsonArray = [];
    itemJsonArray.push([naam,ptaa,seher,states,pin,mail]);
    localStorage.setItem("itemJson",JSON.stringify(itemJsonArray));
}
else{
    let itemJsonArrayStr = localStorage.getItem("itemJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([naam,ptaa,seher,states,pin,mail]);
    localStorage.setItem("itemJson",JSON.stringify(itemJsonArray));
}
}
// add = document.getElementById("add");
// add.addEventListener("click",update);
function msg(){
    alert("Payment mode  is not  Active.");
    add = document.getElementById("add");
    add.addEventListener("click",update);
    
}
function con(){
    prompt("Do you really want to set this address as default option?");
    console.log(localStorage.getItem("itemJson"));
    add = document.getElementById("add");
    add.addEventListener("click",update);
}
function gda(){
    prompt("Please copy your Default Address.")
    add = document.getElementById("add");
    add.addEventListener("click",update);
}