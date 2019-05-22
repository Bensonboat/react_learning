const path = require('path');

module.exports = {
    entry: ['./index.js', './index.jsx'],
    output:{
        filename: 'bundle.js',
        path: path.resolve('./')
    },
    devServer:{
        port: 9000,
        inline: true
    },
    module:{
        rules:[
            {
                test: /\.js$/, exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },{
                test: /\.jsx$/, exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-react', '@babel/preset-env']
                    }
                }
            }
        ]
    }
}