//引入http模块
var http = require('http');
//创建服务器并设置回调函数
var server = http.createServer(function(request,response){
    //回调函数接受两个参数request和response
    //获取http请求的方式和url
    console.log(request.method + ":" +request.url);
    //将http相应200写入到response并设置Content-Type:text/html
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>hello world!</h1>');
});

//设置服务监听为8080端口
server.listen(8080);

console.log('sever is running at 8080 port');