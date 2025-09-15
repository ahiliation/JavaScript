var myDate = new Date();
myDate.setUTCHours(12);
myDate.setUTCMinutes(0);
myDate.setUTCSeconds(0);

var html = myDate.toUTCString() + "\n";
html += myDate.toLocaleString() + "\n";

console.log(html);
