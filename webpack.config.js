const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname + '/js',
    entry: ['./index'],
    output: {
        path: path.resolve(__dirname, "js"),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {},
    plugins: []
};
