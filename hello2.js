var fs = require("fs");
var ASQ = require("asynquence");
require("asynquence-contrib");

var say = {
    foo : function(file, cb){
        return fs.readFile(file, function(err, contents){
            if(err){
                cb(err)
            }else{
                setTimeout(function(){
                    cb(null, contents)
                },1000)
            }
        });
    }
};
module.exports = say;