import { createServer } from "http";
const server = createServer(function (request, response) {
    response.writeHead(309, {
        "content-type": "text/html;charset=utf-8"
    });
    const body = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Node.js Demo </title>
</head>
<body>
<h1 style="color:green">Hello World </h1>
</body>
</html>`
    response.write("Helo this is from serverf");
    response.end(body);

});
server.listen(9000, function () {
    console.log("helo this is start of my Backend and port is ", server.address().port);
})