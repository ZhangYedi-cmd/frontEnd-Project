/** commonJs */
exports.sum = function () {
    const args = Array.from(arguments);
    return args.reduce((prev, curr) => prev + curr);
}

exports.a = 1 ;

/** ESM */
export const sayHello = () => {
    console.log("hello es6!")
}
