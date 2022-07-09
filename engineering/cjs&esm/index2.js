const hello = require("./helloCjs.js");

console.log(hello)

// commonJS 输出的是值的拷贝，即使之前的值改变也不会影响到导入的值
setTimeout(() => {
    console.log(hello.name)
},600 )