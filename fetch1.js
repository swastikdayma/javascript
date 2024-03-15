fetch('https://dummyjson.com/products/1')
.then(data =>data.json())
.then(response =>{
    console.table(response)
})
.catch(error => console.log(error))

// async function name(){
//     try{  const data=await fetch('https://dummyjson.com/products/1')
//     const  result= await data.json()
//     console.table(result)}
//     catch(error){
//         console.table(error)
//     }
 
// };
// name()


// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))
            
