var http = require("http");

var url = process.argv[2];
var amountReceived = 0;
var sentByServer = "";
http.get(url, function(response){
   response.setEncoding("utf8");
   response.on("error", function(error)
   {
      throw error;
   });
   
   response.on("data", function(data)
   {
      if(data != undefined)
      {
          sentByServer += data;
          amountReceived += data.length;
      }
   });
   
   response.on("end", function(end){
      console.log(amountReceived);
      console.log(sentByServer);
   });
});