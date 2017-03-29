var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');
//从命令行获取root目录
var root = path.resolve(process.argv[2] || '.');
//输出当前的root目录
root += '\\static';
console.log('Static root dir:' + root);
//下面创建服务器
var server = http.createServer(function(request,response){
    //获取url的path
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);
    //获取对应的本地文件路径
    var filepath = path.join(root,pathname);
    //获取文件状态
    fs.stat(filepath,function(err,stats){
        if(!err && stats.isFile()){
            //没有错误且文件存在
            console.log('200' + request.url);
            //发送200相应
            response.writeHead('200');
            //将文件流导向response
            fs.createReadStream(filepath).pipe(response);
        }else{
            //出现错误或者文件不齐全
            console.log('404' + request.url);
            //发送404响应
            response.writeHead('404');
            response.end('404 not found');
        }
    });
});

//设置监听端口为8080
server.listen(8080);
console.log('file server is readiing for http');
