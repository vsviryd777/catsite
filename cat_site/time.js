"use strict";

/* Execute the function to run and display the countdown clock */
showClock();
setInterval("showClock()", 1000);


/* Function to create and run the countdown clock */
function showClock() {
   /* current date and time */
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   /* Display the current date and time */
   document.getElementById("currentTime").innerHTML =
   "<span>" + localDate + "</span><span>" + localTime + "</span>";

   var nyDate = nextNYData(thisDay);
   nyDate.setHours(21);

   /* Calculate the days, hours, minutes, and seconds until August 8,2022 */
   var days = (nyDate - thisDay)/(1000*60*60*24);
   var hrs = (days - Math.floor(days))*24;
   var mins = (hrs - Math.floor(hrs))*60;
   var secs = (mins - Math.floor(mins))*60;

   /* Display the time left until August 8,2022 */
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
}

function nextNYData(currentDate) {
   var cYear = currentDate.getFullYear();
   var nyDate = new Date("August,8 2022");
   nyDate.setFullYear(cYear);
   if ((nyDate - currentDate) < 0) nyDate.setFullYear(cYear + 1);
   return nyDate;
}
window.onload = function() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("invalid data detected. ");
      return false;
   };
};
