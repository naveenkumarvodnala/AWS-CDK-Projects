const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html"});

    res.end(`
        <h1>Hello from nodejs</h1>
        <p>This application is running behind the Nginx.</p>
        `);
})

server.listen(3000, () => {
    console.log("Server runing on port 3000")
})