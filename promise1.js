//promise creation
const promiseVariable = new Promise(function(resolve, reject){
// async tasks
setTimeout(function(){
    let error = true;
    if(!error){
        onsole.log("promise timeout")
    }
 
 resolve()
},1000)

})

//promise consumption
promiseVariable.then(function(){
 console.log("resolved")
})
.catch(function(error){
    console.log(error)
}).finally(()=> {
    console.log('finally the promise is resolved or either rejected')
})