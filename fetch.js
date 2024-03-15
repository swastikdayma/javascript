


//  async function fetchApi(){
//  const data= await fetch( 'https://dummyjson.com/products/1');
//  const response= data.json()
//  console.log(response)

// }
// fetchApi()



// fetch('https://dummyjson.com/products/1')
// .then(response => response.json())
// .then(jsonData => console.table(jsonData))

fetch('new.json')
.then(response => response.json())
.then(jsonData => console.log(jsonData))
.catch(error => console.log(error, "error"))

jsonData.forEach(element => {
   console.log(element)
});

            