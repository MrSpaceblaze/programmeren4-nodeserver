let http = require('express');
var app = express();

app.all('*',function(request, response) {
	response.status(404);
	response.send('404 - not found')
})
app.listen(process.env.PORT, function() {
	console.log('App is listening on port'+process.env.PORT)
});