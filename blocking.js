import fs from "fs"
import http from "http"

function heavyComputation(){
    const start = Date.now();
    while (Date.now() - start < 5000); // Blocks for 5 seconds
}

http.createServer((req,res)=>{
if (req.url === "/heavy") {
    heavyComputation();
    res.writeHead(200);
    res.end('Heavy computation done');

}else{
    res.writeHead(200);
    res.end("Hello world");
}
}).listen(3000,()=>{
    console.log("Server is running at port 3000")
})