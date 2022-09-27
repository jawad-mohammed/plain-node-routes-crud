const userController = require('../model/userModel')

async function getRequest(req,res){
try {
    const users = await userController.findUser()
  res.writeHead(200,{'Content-Type':'application/json'})
  res.end(JSON.stringify(users))

} catch (error) {
    console.log(error);
}
}
//@desc Gets Single Product
//@route Get
async function getRequestid(req,res,id){
try {
    const oneUser = await userController.findUser(id)
if(! oneUser){
    res.writeHead(404, {'Content-Type':'application/json'})
    res.end(JSON.stringify({message:'User not found'}))
}else{
    res.writeHead(200, {'Content-Type':'application/json'})
    res.end(JSON.stringify(oneUser))
}

} catch (error) {
    console.log(error);
}
}




module.exports = {getRequest,getRequestid}
