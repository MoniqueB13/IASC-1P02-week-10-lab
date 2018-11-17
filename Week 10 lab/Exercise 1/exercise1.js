//COME BACK TO THIS
var start = new Date();
var initialTime = start.getSeconds();
function stopTime(){
  var startAlert = new Date();
  var newTime = startAlert.getSeconds();
  var totalTime = (Number(newTime) - Number(initialTime));
  var time = alert("You have been on the page for: " + totalTime + " seconds");
  console.log(time);
}
