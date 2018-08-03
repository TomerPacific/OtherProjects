var fs = require('fs');
var path = require('path');
module.exports = function (filePath, filterBy, callback){
    fs.readdir(filePath, function(err, data){
    if(err)
   {
       return callback(err);
   }
   else
   {
       var results = [];
       data = data.forEach(function(file){
       if(path.extname(file) === "."+ filterBy) 
            results.push(file);
       })
       return callback(null, results);
   }
    });
}