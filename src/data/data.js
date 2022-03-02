export const products = [
    {id: 1, name: "Producto 1", price: "100", stock: "11", img: "https://i.blogs.es/4f0662/consejos-foto-movil-01/840_560.jpg"},
    {id: 2, name: "Producto 2", price: "200", stock: "12", img: "https://i.blogs.es/4f0662/consejos-foto-movil-01/840_560.jpg"},
    {id: 3, name: "Producto 3", price: "300", stock: "13", img: "https://i.blogs.es/4f0662/consejos-foto-movil-01/840_560.jpg"},
    {id: 4, name: "Producto 4", price: "400", stock: "14", img: "https://i.blogs.es/4f0662/consejos-foto-movil-01/840_560.jpg"},
    {id: 5, name: "Producto 5", price: "500", stock: "15", img: "https://i.blogs.es/4f0662/consejos-foto-movil-01/840_560.jpg"},
]
  
const getData = new Promise((resolve, reject)=>{
    if (true) {
        setTimeout(() => {
            resolve(products)        
        }, 2000);
    }else{
        reject('Error')
    }
  })

export default getData