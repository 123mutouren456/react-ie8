const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [{
            test: /\.[s]?css$/,
            loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '192.168.1.24',
        // inline: true, //可以监控js变化
        // hot: true, //热启动
        proxy: {
            '/ke': {
                target: 'http://mock.sysware.com.cn/mock/63',
                changeOrigin: true,
                disableHostCheck: true,
                noInfo: true
            }
        }
    },
    // watch: true,
    // watchOptions: {
        // poll: true
    // }
};

module.exports = merge(commonConfig, devConfig);