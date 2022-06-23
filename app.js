var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  //Most browsers make an additional request for the favicon.ico so we wanna run the code if the request isn't for favicon icon,if you do not add the if check below,this code runs twice and we don't want that.
  if (req.url != "/favicon.ico") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    var readStream = fs.createReadStream("./bigTextFile.txt");
    console.log("req made");
    //pipe, pipes/connects a readable stream to a writable so 'res' object is a writable so we pipe readStream to res which is writable
    readStream.pipe(res);
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Listening to port 5000");
});

