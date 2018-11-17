var myPrompt = prompt("What is your age?");
console.log(myPrompt);
var todayDate = new Date();
var Year = todayDate.getFullYear();
document.getElementById("age").innerHTML=(Year - myPrompt);
