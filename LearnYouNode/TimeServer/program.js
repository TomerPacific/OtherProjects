var net = require("net");
var formattedDate = "";

var server = net.createServer(function(socket){
   var date = new Date();
   var month = date.getUTCMonth() + 1;
   var day = date.getDate();
   var year = date.getFullYear();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   
   month = checkIfOneDigit(month);
   day =  checkIfOneDigit(day);
   hours = checkIfOneDigit(hours);
   minutes =  checkIfOneDigit(minutes);
   formattedDate = year+"-"+month+"-"+day+" "+hours+":"+minutes+"\n";
   socket.write(formattedDate);
   socket.end();
});

function checkIfOneDigit(number)
{
   return number.toString().length === 1 ? "0"+ number : number;
}

server.listen(process.argv[2]);
