const resolveApp = require("./path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const aliasPath = require('../tsconfig.json').compilerOptions.paths;
console.log(aliasPath);
module.exports = {
    mode:'development',
    entry:'./src/index.tsx',
    performance: {
        hints: false,
      },
    output:{
        filename:"bundle[name].js",
        path:resolveApp('./build'),
    },
    devServer:{
        hot:true,
        port:8585,
        compress:true
    },
    resolve:{
        extensions:[".tsx",".ts",".js","jsx",'.json'],
        alias: Object.keys(aliasPath).reduce((pre,curr)=>{
            pre[curr]=aliasPath[curr][0]
            return pre
        },{})     

    },
    module:{
        rules:[
            {
                test:/\.tsx?$/i,
                exclude:/node_modules/,
                use:['babel-loader','ts-loader']
            }
        ]
    },
    optimization:{
        splitChunks:{
            chunks:'all',//默认值async，存在异步导入才会分离,initial同步导入会分离
            minSize:0,//字节，如果拆分出来一个包，最小为20000字节，默认值就为此
            maxSize: 25300,//默认值 大于maxSize的包拆分为不小于minSize的包，minSize优先级高
            minChunks:1,
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
    
}
