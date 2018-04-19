let http = require('http');

http.createServer(function (request, response){
	console.log('request');
	response.writeHead(200,{'Content-Type': 'application/json'});
	let result = JSON.stringify({
		'firstname':'Something',
		'lastname': "Else"
	});
	response.end(result);
}).listen(3000);

console.log('Server listens on port 3000');