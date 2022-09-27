const allusers = require('../users.json')

function findUser(){
   return new Promise((resolve,reject)=>{
resolve(allusers)

   }) 
}

function findUserById(id){
return new Promise((resolve,reject)=>{
const user =  allusers.find((user)=>user.id === id)
resolve(user)
})
}



module.exports = {findUser,findUserById}