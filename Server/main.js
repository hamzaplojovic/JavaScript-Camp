var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query;
    var txt = q.season;
    if (q.season == "winter") {
        res.write("<h1>" + txt + "<h1>");
    }
}).listen(8080);
