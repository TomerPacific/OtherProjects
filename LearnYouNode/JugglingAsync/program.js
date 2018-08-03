var http = require("http");

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var inputFromUrl = "";
var index = 0;
function getResponseFromUrl(url)
{
   if(index > 2)
   {
      return;
   }
   http.get(url, function(response){
      response.setEncoding('utf8');
      response.on("error", function(error)
      {
         throw error;
      });
   
      response.on("data", function(data)
      {
         if(data != undefined)
         {
            inputFromUrl += data;
         }
      });
   
      response.on("end", function(end){
         console.log(inputFromUrl);
         inputFromUrl = "";
         index++;
         getResponseFromUrl(urls[index]);
      });
   });
   
}

getResponseFromUrl(urls[0]);