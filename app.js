const http = require('http')
const {readFileSync} = require('fs')
const homePage = readFileSync('index.html')

const fs = require('node:fs');

const hostname = '192.168.1.11';
const port = 5000;
const server = http.createServer((req,res)=>
    {
        const url = req.url
        if(url === "/")
            {
                res.writeHead(200, {"content-type":"text/html"})
                res.write(homePage)
                res.end()
            }
        else if(url === "/image.avif")
            {
                res.writeHead(200, {"content-type":"image"})
                res.end(readFileSync('image.avif'))
            }
        else if(url === "/winner.html")
            {
                res.writeHead(200, {"content-type":"text/html"})
                res.end(readFileSync('winner.html'))
            }
        else if(url === "/style.css")
            {
                res.writeHead(200, {"content-type":"text/css"})
                res.end(readFileSync('style.css'))
            }
        else if(url === "/script.js")
            {
                res.writeHead(200, {"content-type":"text/js"})
                res.end(readFileSync('script.js'))
            }
        else if(url === "/scores.json" && req.method == "GET")
            {
                res.writeHead(200, {"content-type":"text/json"})
                res.end(readFileSync('scores.json'))
            }
        else if(url === "/scores.json" && req.method == "POST")
            {
                let data = []
                req.on('data', (chunk) => {
                    console.log(`Data chunk available: ${chunk}`)
                    data.push(chunk)

                    fs.writeFile("scores.json",chunk,err => {
                        if (err) {
                          console.error(err);
                        } else {
                          // file written successfully
                        }
                    }
                    )
                })
                req.pipe(res)
            }
        

    })

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 