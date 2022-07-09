/**
 * @author Yedi Zhang --Tust
 * @date 2022/6/12 10:02
 * @email 178320369@qq.com
 */

const sum = (...args) => {
    return args.reduce((p, c) => p + c)
}

console.log(sum(1, 2, 3));

export default sum;