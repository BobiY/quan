//引入path模块
const path = require("path");
//引入webpack模块
const webpack = require("webpack");
//引入单独打包css/less/sass文件的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//自动给css3添加属性，添加厂商前缀
const autoprefixer = require("autoprefixer");
//自动生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fs = require('fs');

var url = path.join(__dirname,'page');

var file = fs.readdirSync(url);

var obj = {};
var entry = {};

//webpack配置
obj = {
	//入口文件
	entry,
	//输出文件地址及其名字
	output:{
		path:path.resolve(__dirname,"dist/html"),
        filename:"js/[name].js"
	},
	//loader配置
	module:{
		rules:[
           {
           	    //使用babel编译js文件
	           	test:/\.js$/,
	           	use:[{
		          loader:"babel-loader",
		          options:{
		            presets:["es2015","react"]
		          }
		        }],
	           	exclude: [
		          path.resolve(__dirname, "node_modules")
		        ]
           },
           {
              //编译css问价
	           	test:/\.css$/,
                use:ExtractTextPlugin.extract({
			          fallback: 'style-loader',
			          use: ['css-loader','postcss-loader']
			        })
           },
           {
                //编译less文件
           	    test:/\.less$/,
           	    use:ExtractTextPlugin.extract({
			          fallback: 'style-loader',
			          use: ['css-loader',"postcss-loader",'less-loader']
			        })
           },
           {
                //编译scss或者sass文件
           	    test:/\.(sass|scss)$/,
           	    use:ExtractTextPlugin.extract({
			          fallback: 'style-loader',
			          use: ['css-loader','sass-loader']
			        })
           },
           {
                //编译图片文件
           	    test:/\.(png|jpg|gif|svg)$/,
           	    loader:"url-loader?limit=500&name=../image/[name].[ext]"
           },
		   {
                //编译图片文件
           	    test:/\.(eot|ttf|woff|woffs)$/,
           	    loader:"file-loader"
           }
		]
	},
	//webpack服务器配置
	devServer:{
        contentBase: './dist/html',
        stats: {
            colors: true
        },
        historyApiFallback:true,
        inline:true,
        port:3000,
        hot:true
	},
	plugins:[
	   //css样式单独打包的插件
	   new ExtractTextPlugin("./css/[name].css"),
	   //模块热更新插件
	   new webpack.HotModuleReplacementPlugin(),
	   //将jq配置成全局变量
	   new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery"
			}),
	   //postcss配置
	   new webpack.LoaderOptionsPlugin({
			options: {
				postcss: function(){
					return [
						require("autoprefixer")({
							browsers: ['ie>=8','>1% in CN']
						})
					]
				}
			}
		})
	]
};

//自动检测生成编译入口文件
file.forEach( name => {
	entry[name] = path.join(url,name,'index.js');
	// obj.plugins.push(new HtmlWebpackPlugin({
	// 	title:name,
    //     filename: path.join(__dirname,'dist/html/page',name + '.html'),
    //     template: path.join(__dirname,'index.html'),
    //     chunks:[name],
	// 	inject: 'body',
    // }))
} );

module.exports = obj
