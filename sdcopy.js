//object copy

// let obj1 = {
//     name:"swastik"
// }

// let obj2 = obj1;


// obj2.name = "dayma";
// console.log(obj2)
// console.log(obj1)



//shallow copy

// {

// let obj1 = {
//     name:"swastik",
//     address: {
//         place:"jaipur",
//         state:"rajasthan"
//     }
// };


 //type 1
//  let obj2 = Object.assign({},obj1);
//  let obj2 = Object.assign({},obj1)

// //  //type2
// // let obj2 = {...obj1}
// let obj2 = {...obj1}
// obj2.address.place = "sambhar"

// // obj2.address.state= "Rajasthan";
// obj2.name="hello"

// console.log(obj2);
// console.log(obj1);

// }

//deep copy

// {
   

// let obj1 = {
//     name:"swastik",
//     address: {
//         place:"jaipur",
//         state:"rajasthan"
//     },
//     func:function(){}
// };

// let obj2 = JSON.parse(JSON.stringify(obj1));




// obj2.address.state= "Rajasthan";

// console.log(obj2)
// console.log(obj1);



//deep copy with lodash
// var _ = require('lodash');

// let obj1 = {
//     name:"swastik",
//     address: {
//         place:"jaipur",
//         state:"rajasthan"
//     },
//     func: function(){
//         console.log("hello")
//     }
// };
// let obj2 = _.cloneDeep(obj1)


// obj2.func= "Rajasthan";

// console.log(obj2)
// console.log(obj1);








