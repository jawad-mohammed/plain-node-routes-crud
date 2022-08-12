const http = require('http');
const {getProducts} = require('./controller/productController')


//creating simple routes 
const server =http.createServer((req,res)=>{
if(req.url === '/api/products' && req.method === 'GET'){
  getProducts(req,res)
}else{
    res.writeHead(404,{'Content-Type':'application/json'})
    res.end(JSON.stringify({message:"invalid url"}));
}

})













const PORT = 8080;
server.listen(PORT,console.log(`server is listening on ${PORT}`))