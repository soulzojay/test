const path=require('path')
const HTMLWebpackPlugin=require('html-webpack-plugin')

module.exports={
    plugins:[
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "signup.html")
        })
    ]
}

module.exports={
    entry:{
        index: path.resolve(__dirname, './src/index.js')
    },
    output:{
        path: path.resolve(__dirname, './build'),
        filename: '[name].bunde.js'
    }
}