var localTime = new Date();

var html = "UTC Time is " + localTime.toUTCString();
html += "Local Time is " + localTime.toLocaleString();
html += "Time Zone Offset is " + localTime.getTimezoneOffset();
html += "Using toLocalTimeString() gives: " + localTime.toLocaleTimeString();
html += "Using toTimeString() gives: " + localTime.toTimeString();
html += "Using toLocaleDateString() gives: " + localTime.toLocaleDateString();
html += "Using toDateString() gives: : " + localTime.toDateString();

console.log(html);
