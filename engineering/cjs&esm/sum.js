/** commonJs */
// exports.sum = function () {
//     const args = Array.from(arguments);
//     return args.reduce((prev, curr) => prev + curr);
// }
//
// exports.a = 1 ;

/** ESM */
export const sayHello = () => {
    console.log("hello es6!")
}

export let name = "zyd";

export let obj = {
    name: "123",
}

setTimeout(() => {
    name = "Cmy"
}, 500)


export let count = 0 ;

export const addCount = function ()  {
    return function () {
        count++;
        console.log(count)
    }
}

