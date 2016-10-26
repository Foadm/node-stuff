function printHelp() {
    console.log("1.js usage:");
    console.log("");
    console.log("--help              print this help");
    console.log("--file={FILENAME}   which file to load");
    console.log("");
    console.log("");
}


var args = require("minimist")(process.argv.slice(2),{ string: "file" });
var hello = require("./hello2.js");

if ("help" in args || !args.file) {
    printHelp();
    process.exit(1);
}
hello.foo(args.file, function(err, contents){
    if(err){
        console.error("Error: some shit went wrong")
    }else{
        console.log(contents.toString());
    }

});

