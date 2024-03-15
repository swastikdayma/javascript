
//promise creation
// const promiseVariable = new Promise(function(resolve, reject){
// // async tasks
// setTimeout(function(){
//  console.log("promise timeout")
// //  resolve()
// },1000)

// })

new Promise(function(resolve,reject){
          setTimeout(function(){
         let error = false;
         if(!error){
            resolve({name:"swastik", lastName:"dayma"})
         }
         else{
            reject("ERROR OCCURED")
         }
           
          },3000)
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("this part runs always")
})
















// //-------------------------------


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("promise timeout 2")
//         resolve()
//        },1000)
// }).then(function(){
//     console.log("resolved 2")
//    })

//    //------------------------

//  const preomise4=   new Promise(function(resolve,reject){
//     setTimeout(function(){
//        let error = true;
//        if(!error){
//         resolve({name:"swastik", lname:"dayma"})
//        }else{
//         reject('something is wrong here')
//        }
       
//        },1000)
// });

// preomise4
// .then((user)=>{
//     console.log(user)
//     return user.name

// }).then((name)=>{
//     console.log(name)

// }).catch(function(error){
//     console.log(error)
// }).finally(()=> {
//     console.log('finally the promise is resolved or either rejected')
// })


//-------------------------------

// const preomise5 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//        let error = true;
//        if(!error){
//         resolve({name:"swastik", lname:"dayma"})
//        }else{
//         reject('something is wrong here')
//        }
       
//        },1000)
// });

// async function consumptionPromise5(){
//     try{
//         const response =  await preomise5;
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
 
// }
// consumptionPromise5()