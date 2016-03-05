

var http = require('http');

var server = http.createServer(function(request, response){
	console.log("inside callback");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World\n");
	});
	
var template = "<body><%= title %></body>";
var title = "My Title";
var regex = /\<\%\= (.*) \%\>/;
var match = template.replace(regex, function(match, capture, offset, original){
	return '" +' + capture + '+ "'; 
	});
console.log(match);
match = '"' + match + "\"";
console.log(match);

result = eval(match);
console.log(result);
server.listen(8080);
console.log("Running on http://127.0.0.1:8080");
