import {createServer} from "node:http";
let server=createServer(function(req,res){
    let url=new URL(req.url,"http://localhost:5178");

res.writeHead(200,{
    "content-type":"text/html;charset=utf-8"
});

res.write(` jonny bhai ka  ${url.searchParams.get("name")}`);
res.end("this is the end");


});



server.listen(5178,function(){
    console.log("server is started on port 5178");
});