import(
    /* webpackChunkName: "sumChunk" */
    /* webpackPreload: true */
    './preload.js').then(({sum}) => {
    console.log(sum([1,2,3,4,5]))
})

const request = () => new Promise(() => {
    setTimeout()
})