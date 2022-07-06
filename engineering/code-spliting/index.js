import( /* webpackChunkName : 'sum' */ './sum.js').then(m => {
    console.log(m.default(1, 2));
})