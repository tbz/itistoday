var http 	= require('http');
var url 	= require('url');
var fs		= require('fs');

var c = require('./calendar.js');

http.createServer(function (req, res) {
	var view = '404.html';
	var printToday = false;
	var type = 'text/html';
	var reqUrl = url.parse( req.url );

	switch (reqUrl.pathname) {
		case '/styles.css':
			var isCss = true;
		case '/cs.js':
		case '/calendar.js':
			view = reqUrl.pathname.substr(1);
			type = isCss ? 'text/css' : 'text/javascript';
			break;
		case '/':
			view = 'index.html';
			printToday = true;
			break;
	}

	fs.readFile(view, 'UTF-8', function (err, data) {
		if (err) throw err;
		res.writeHead(200, {'Content-Type': type});

		if (printToday) {
			data = data.replace('IT IS TODAY.', c.getDayFullString());
		}
		res.end( data );
	});
}).listen(1337);

console.log( 'Server running' );

