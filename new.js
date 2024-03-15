// let name = {
//     firstname:"swastik",
//     lastname : "dayma",
//     printfullname= function(hometown, state){
//         console.log(this.firstname+ " "+ this.lastname+ " from "+" "+ hometown +" " + state);
// }

     
// }
// printfullname.call(name, "dehradun", "uk")

// let name2 ={
//     firstname:"dev",
//     lastname:"manush"
// }

// // function borrowing

// printfullname.call(name2, "sambhar", "rajasthan");
// //directly passes arguments

// printfullname.apply(name2,["jaipur", "rajasthan"]);




// iife
// (function name(){
//      console.log("hello")
// })()


//immediately invoked function expression
// (
// function name(){
//  console.log("hjijijiji")
//     })()



// let swastik ={
//     first : "swastik",
//     last: "dayma",
  

// }

//  function bothname(town, state) {
//     return this.first+ " "+ this.last + ""+ town + ""+ state
// }
// // swastik.bothname()

// let dev ={
//     first : "dev",
//     last: "manush",
// }

// let name=bothname.call(swastik,"sambhar", "rajasthan")
// let sname=bothname.call(dev , ["jaipur", "rajasthan"])
// console.log(sname)


// function Mytime(){
    //     let myTime = new Date()
    // let todayDate= myTime.getDate()
    // let month = myTime.getMonth()+1
    // let Year = myTime.getFullYear()
    // let hours = myTime.getHours()
    // let min = myTime.getMinutes()
    // let sec = myTime.getSeconds()
        
    //     let a  = ${todayDate}/${month}/${Year} ${hours}:${min}:${sec}

    //     document.getElementById('time').innerHTML=a
    // }

    // setInterval(Mytime,1000)

// const prompt = require('prompt-sync')()

// let height = prompt("Height Short/Tall :- ")

// if(height<1){
//     let squeak = prompt("Can squeak /cannot Squeak (Yes/No) :- ")
//     if(squeak=="yes"){
//         console.log("Might be a squirrel")
//     }else{
//         console.log("Might be a Rat")
//     }
// }
// else if(height>1){
//     let neck = prompt("Neck Short/Long:- ")
//     if(neck=="short"){
//        let nose = prompt("Nose Short/Long :- ")
//        if(nose=="short"){
//         let stay = prompt("On land / In water :- " )
//         if(stay=="On land"){
//             console.log("Might be a rhinoceros")
//         }else if(stay=="in water"){
//             console.log("Might be a hippo")
//         }
//        }else{
//         console.log("Might be a elephant")
//        }
//     }else{
//         console.log("Might be a giraffe")
//     }
// }


// let str = ""
// for(let i = 1; i<=5; i++){

//               for(j=1; j<=i; j++){
//                 str += str+"*"
//               }

//              str += "\n"
              
            
//         }

//         console.log(str)


// function first(){
//     const a= 'swastik'
//     function second(){
//         const b = "dayma"
//         console.log(a)
//     }

//     // console.log(b)
//     second()

// }
// first()

// {
//     let a = 'swastik';
  
// }
// console.log(a)
