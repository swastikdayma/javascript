// new Promise(function(resolve,reject){
// setTimeout(function(){
//     let error = true;
//     if(!error){
//         resolve({name: "swastik", lname:"dayma"})
//     }else{
//         reject("error occured")
//     }
    
// },1000)


// .then(function(){
//  console.log("resolved")
// }).catch(function(){
//  console.log("rejected")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//        let error = true;
//        if(!error){
//         resolve({name:"swastik", class:"5pm"})
//        }else{
//         reject("error occured while fetching data")
//        }
//     },1000)
// })
// .then(function(myname){
//     // console.log(myname)
//     return myname.name
// }).then(function(name){
//    console.log(name)
// })
// .catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log("always runs")
// })


// }).then(function(alldata){
//     // console.log(alldata)
//     return alldata.name
// })
// .then(function(name){
//     console.log(name)
// }).catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log("always runs")
// })

//------------------------

// const promiselearn = new Promise(function(resolve,reject){
//     setTimeout(function(){

//         let error = true;
//         if(!error){
//             resolve({name: "swastik", lname:"dayma"})
//         }else{
//             reject("error occured while fetching data")
//         }
        
//     },1000);
//     })

//     async function consumer (){
//         try {
//             const response =  await promiselearn;
//        console.log(response)
//         } catch (error) {
//             console.log(error)
//         }
       
//     }
//     consumer();



// const promiseOne=new Promise(function(resolve,reject){
//   setTimeout(function(){
   
//        let error = false;
//        if(!error){
//         resolve({name:"swastik", class:"12"})
       
//        }else{
//         reject("ERROR OCCURED")
//        }
//   },1000)
// })
// promiseOne.then(function(data){
//  console.log(data)
//  return data.class;
// }).then(function(classes){
//      console.log(classes)
// })
// .catch(function(error){
//  console.log(error)
// })
// .finally(function(){
//     console.log("kuch bhi")
// })



// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
     
//          let error = true;
//          if(!error){
//           resolve({name:"swastik", class:"12"})
         
//          }else{
//           reject("ERROR OCCURED")
//          }
//     },1000)
//   })

//  async function consume(){
   
//    try {
//     const response= await promiseOne;
//    console.log(response)
//    } catch (error) {
//      console.log(error)
//    }
// }
// consume()



// console.log("This is the middle part")

// setTimeout(function(){
//     console.log("hello")
// },4000)

// console.log("this is the last part")
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("khushi");
//     },1000)
// })
 
const alldata = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({fname:"swastik"})
    }
    else{
      reject("ERROR OCCURED")
    }
  
  },3000)
})
//method 1
// .then(function(names){
//      console.log(names)
// }).catch(function(error){
//   console.log(error)
// }).finally(function(){
//   console.log("always runs")
// })

//method2

//  async function consume(){
   
//    try {
//     const response= await alldata;
//    console.log(response)
//    } catch (error) {
//      console.log(error)
//    }
// }
// consume()