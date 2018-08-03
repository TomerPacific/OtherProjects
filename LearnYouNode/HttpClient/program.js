var http = require("http");

var url = process.argv[2];

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
          console.log(data);
      }
   });
   
   response.on("end", function(end){
      return;
   });
});