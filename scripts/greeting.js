const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Good Morning Jui Jitsuists!";
} else if (time < 18) {
  greeting = "Good Day Jui Jitsuists!";
} else {
  greeting = "Good Evening Jui Jitsuists!";
}
document.getElementById("hello").innerHTML = greeting;