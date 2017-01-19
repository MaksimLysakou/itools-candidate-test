var path = require('path');
var webpack = require('webpack');

module.exports = [
    {
        devtool: 'source-map',
        entry: {
            handsontable: './public/js/vendor/handsontable/index'
        },

        output: {
            path: './public/js/static/',
            filename: '[name].js',
            library: 'ReactHandsontable',
            libraryTarget: 'umd',
        },

        externals: {
            'react': 'umd react',
            'react-dom': 'umd react-dom',
            'handsontable': 'umd handsontable'
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        module: {
            loaders: [
                {
                    test: /(\.js)|(\.jsx)$/,
                    loader: 'babel',
                    query: {
                        presets: ['react', 'es2015']
                    }
                }
            ]
        }
    },
    {
        entry: {
            bundle: './public/js/build.js'
        },
        output: {
            path: './public/js/static/',
            filename: '[name].js',
            library: 'MainModule',
            libraryTarget: 'umd',
        },
        module: {
            loaders: [
                {
                    test: /(\.js)|(\.jsx)$/,
                    loader: 'babel',
                    query: {
                        presets: ['react', 'es2015']
                    }
                },
                {
                    test: (/\.css$/), loader: "style-loader!css-loader"
                },
                {
                    test: require.resolve('handsontable'),
                    loader: 'expose?Handsontable'
                },
                {
                    test: require.resolve('numbro'),
                    loader: 'expose?numbro'
                },
                {
                    test: require.resolve('moment'),
                    loader: 'expose?moment'
                }, {
                    test: require.resolve('pikaday'),
                    loader: 'expose?Pikaday'
                }, {
                    test: require.resolve('zeroclipboard'),
                    loader: 'expose?ZeroClipboard'
                }
            ]
        }
    }
];