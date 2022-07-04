console.log("hello loading....");

exports.hello = function () {
    console.log ("hello commonjs！");
}

exports.name = "yedi";

setTimeout(() => {
    name = "cmy"
},500)