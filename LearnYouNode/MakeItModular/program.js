var myModule = require("./module.js");
var path = require('path');
var filePath = process.argv[2];
var filterBy = process.argv[3];
var callback = function(err, list)
{
   if(err)
   {
      console.log(err);
   }
   else
   {
      list.forEach(function (file)
      {
         console.log(file);
      });
   }
}

myModule(filePath, filterBy, callback);