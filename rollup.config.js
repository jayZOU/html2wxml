import buble from 'rollup-plugin-buble';

export default {
	moduleName: 'htmltowxml',
    entry: './src/htmltowxml.js',
    sourceMap: true,
	useStrict: false,
    plugins: [ 
    	buble()
    ],
    targets: [
    	{
	        format: 'es',
	        dest: './dist/htmltowxml.js'
	    }, 
	    {
	        format: 'cjs',
	        dest: './dist/htmltowxml.cjs.js'
	    }, 
	    {
	        format: 'umd',
	        dest: './dist/htmltowxml.umd.js'
	    },
	    {
	    	format: 'iife',
	    	dest: './dist/htmltowxml.global.js',
	    }
    ]
};