var localTime = new Date();

var html = "UTC Time is " + localTime.toUTCString() + "\n";
html += "Local Time is " + localTime.toLocaleString() + "\n";
html += "Time Zone Offset is " + localTime.getTimezoneOffset() + "\n";
html += "Using toLocalTimeString() gives: " + localTime.toLocaleTimeString() + "\n";
html += "Using toTimeString() gives: " + localTime.toTimeString();
html += "Using toLocaleDateString() gives: " + localTime.toLocaleDateString() + "\n";
html += "Using toDateString() gives: : " + localTime.toDateString() + "\n";

console.log(html);
