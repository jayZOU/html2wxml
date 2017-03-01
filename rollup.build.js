import { rollup } from 'rollup';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

const option = {
    entry: './src/htmltowxml.js',
    plugins: [ 
        buble(),
        uglify()
    ],
}

rollup(option)
    .then((bundle) => {
        bundle.write({
            format: 'cjs',
            moduleName: 'htmltowxml',
            sourceMap: true,
            useStrict: false,
            dest: './dist/htmltowxml.cjs.js'
        });
        return rollup(option)
    })
    .then((bundle) => {
        bundle.write({
            format: 'iife',
            moduleName: 'htmltowxml',
            sourceMap: true,
            useStrict: false,
            dest: './dist/htmltowxml.global.js'
        });
        return rollup(option)
    })
    .then((bundle) => {
        bundle.write({
            format: 'umd',
            moduleName: 'htmltowxml',
            sourceMap: true,
            useStrict: false,
            dest: './dist/htmltowxml.umd.js'
        });
        return rollup({
            entry: './src/htmltowxml.js',
            plugins: [ 
                buble()
            ],
        })
    })
    .then((bundle) => {
        bundle.write({
            format: 'es',
            sourceMap: true,
            dest: './dist/htmltowxml.js'
        });
        // return rollup(option)
    })
