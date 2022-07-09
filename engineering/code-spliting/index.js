import( /* webpackChunkName : 'sum' */ './sum.js').then(m => {
    console.log(m.default(1, 2));
})

import( /* webpackChunkName : 'sum2' */ './sum2.js').then(m => {
    console.log(m.default(1, 2));
})