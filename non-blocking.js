import fs from "fs"
import http from "http"


http.createServer((req,res)=>{
if (req.url === "/read") {
    fs.readFile("largefile.txt",(err,data)=>{
        if (err) {
          res.writeHead(500);
          return  res.end(err)
        }
        res.writeHead(200);
        res.end(data);
    })
}else{
    res.writeHead(200);
    res.end("Hello world");
}
}).listen(3000,()=>{
    console.log("Server is running at port 3000")
})