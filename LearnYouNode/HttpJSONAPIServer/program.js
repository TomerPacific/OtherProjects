var http = require("http");
var url = require("url");
var server = http.createServer(function(request, response){
     
      var parsedUrl = url.parse(request.url, true);
      var time = new Date(parsedUrl.query.iso);
      var result;
      if(/^\/api\/parsetime/.test(request.url)){
         result = {
           hour : time.getHours(),
           minute : time.getMinutes(),
           second : time.getSeconds()
         };
      }
      else if(/^\/api\/unixtime/.test(request.url))
      {
         result = {
            unixtime : time.getTime()
         };
      }
      if(result)
      {
         response.writeHead(200, { 'Content-Type': 'application/json' });
         response.write(JSON.stringify(result));
         response.end();
      }
     
   
});

server.listen(process.argv[2]);