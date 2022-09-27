
// const allusers = require('./users') moved this in modelfolder
const http = require('http')
const {getRequest,getRequestid} = require('./controllers/productController')


//METHOD 1
// const server = http.createServer((req,res)=>{
//   res.statusCode=200
//   //res.setHeader('Content-Type','text/html')
//  res.setHeader('Content-Type','text/json')
//   res.write('<h3>This is jawad</h3>')
//   res.write(JSON.stringify(allusers))
//   res.end()
// })
//since this is plain nodejs we have to manually set routes with ifelse

//2 mETHOD 2
// const server =http.createServer((req,res)=>{
// if(req.url ==='/users' && req.method==='GET'){
// res.writeHead(200,{'Content-Type':'application/json'})
// res.end(JSON.stringify(allusers))
// }else{
// res.writeHead(404,{'Content-Type':'application/json'})
// res.end(JSON.stringify({message:'Route not found'}))
// }
// })

//3 method
// const server =http.createServer((req,res)=>{
//     if(req.url ==='/users' && req.method==='GET'){
//       getRequest(req,res)
//     }else{
//     res.writeHead(404,{'Content-Type':'application/json'})
//     res.end(JSON.stringify({message:'Route not found'}))
//     }
//     })

//4 method for multiple routes 
// const server =http.createServer((req,res)=>{
//     if(req.url ==='/users' && req.method==='GET'){
//       getRequest(req,res)
//     }else if(req.url ==='/api/users' && req.method === 'GET'){
//     //you can create another function and invoke here 
//     getRequest(req,res)
//     }else{
//     res.writeHead(404,{'Content-Type':'application/json'})
//     res.end(JSON.stringify({message:'Route not found'}))
//     }
//     })

//5method for matching url 
const server = http.createServer((req,res)=>{
    if(req.url ==='/users' && req.method==='GET'){
      getRequest(req,res)
    }else if(req.url.match(/\/users\/([0-9]+)/)  && req.method === 'GET'){
    //you can create another function and invoke here 
    const id = req.url.split('/')[3]
    getRequestid(req,res,id)
    }else{
    res.writeHead(404,{'Content-Type':'application/json'})
    res.end(JSON.stringify({message:'Route not found'}))
    }
    })



    






const PORT = 8050
server.listen(PORT,()=>console.log(`server is listening on ${PORT}`))