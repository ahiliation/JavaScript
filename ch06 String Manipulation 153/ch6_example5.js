var html = "<h2>Hello World!</h2>" +
    "<p>We love JavaScript!</p>";

var regex = /<[^>\r\n]+>|[^<>\r\n]+/g;
var results = html.match(regex);

console.log(results.join("\r\n"));
    
