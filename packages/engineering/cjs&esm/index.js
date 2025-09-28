/** common js*/
const sumMoudel = require("./sum.js"); // 相当于导入了整个模块
let sum = sumMoudel.sum; // 运行时加载
let a = sumMoudel.a


/** ES6：ESM*/
import {sayHello} from "./sum.js";

// 静态编译 在编译时就可以完成模块的加载，效率会比commonjs更高一些
console.log(this )