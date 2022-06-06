const path = require('path');

module.exports = {
    entry: './CesiumViewer.js',
    output: {
        path: path.resolve(__dirname, '../../Build/CesiumViewer'),
        filename: 'CesiumViewer.bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: 'style-loader', //在html页面中插入<style>标签；
                    // options:{
                    //     insertInto:'#app',//将打包成的style标签插入app
                    //     singlleton:true,//只生成一个style标签
                    //     transfrom:'./css.transform.js'//css的变形，它会在打包生成的标签插入html页面的时候生效，因此还可以获取浏览器的相关信息
                    // }
                },
                {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        modules: true //开启了modules，在js中引入css文件以后，就可以导出css文件，点.出css文件中的内容；
                    }
                }, {
                    loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
                }
            ]
        }]
    }
}