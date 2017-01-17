var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './public/js/app.jsx',
    ],
    output: {
        path: './public/static',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};