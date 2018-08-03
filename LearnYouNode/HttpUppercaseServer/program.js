var http = require("http");
var result = "";
var server = http.createServer(function(request, response){
   request.setEncoding("utf8");
   request.on("data", function(data){
      result= data.toUpperCase();
      response.write(result);
   });
   
   
});

server.listen(process.argv[2]);