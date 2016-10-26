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
var fs = require("fs");
module.exports = say;