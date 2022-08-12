const data = require('../data/data.json');

function findAll(){
return new Promise((resolve,reject)=>{
resolve(data)

})

}
module.exports = {
    findAll
} 