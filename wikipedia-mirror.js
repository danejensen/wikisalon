var http = require('http');

http.createServer(function (req, res) {
  console.log(req.url)
  var options = {
    host: 'en.wikipedia.org',
    port: 80,
    path: req.url,
  };
  var req = http.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      chunk = chunk.replace("http://upload.wikimedia.org/wikipedia/en/b/bc/Wiki.png","http://upload.wikimedia.org/wikipedia/commons/c/c4/Wikimedia_Foundation_RGB_logo_with_text.svg");
      res.write(chunk, 'utf8');
      //console.log('break')
    });
    //res.write('<iframe src="" id="myiframe" width="100%" height="300"><p>Your browser does not support iframes.</p></iframe>','utf8');
    res.writeHead(response.statusCode, response.headers);
  });

}).listen(1337, "127.0.0.1");
