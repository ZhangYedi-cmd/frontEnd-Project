// rollup.config.js
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: ['./index.js'],
    output: {
      file : './bundle.js'
    },
    plugins: [
        commonjs({
            defaultIsModuleExports: true
        })
    ]
};