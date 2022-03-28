export const productos = [
    {id: '1', name: "Camiseta Soda Estereo", category: "Camisetas" , price: 100, stock: 11, img: "https://i.ibb.co/dJQT723/camiseta1.jpg", det :"Camiseta manga corta básica Regular Size. Estampado en serigrafía sin tacto. 95% algodón 5% poliéster. Hecho en Colombia"},
    {id: '2', name: "Camiseta Foo Fighters", category: "Camisetas" , price: 100, stock: 12, img: "https://i.ibb.co/gFvzrHr/camiseta2.jpg", det :"Camiseta manga corta básica Regular Size. Estampado en serigrafía sin tacto. 95% algodón 5% poliéster. Hecho en Colombia"},
    {id: '3', name: "Sweater Soda Stereo", category: "Sweaters" , price: 200, stock: 13, img: "https://i.ibb.co/H2ww38x/sweater1.jpg", det :"Sweater semioversize unisex. Estampado en serigrafía sin tacto. 90% algodón 10% poliester. Hecho en Colombia"},
    {id: '4', name: "Sweater Ungly Osos", category: "Sweaters" , price: 200, stock: 14, img: "https://i.ibb.co/rtP5sXC/sweater2.jpg", det :"Sweater semioversize unisex. Estampado en serigrafía sin tacto. 90% algodón 10% poliester. Hecho en Colombia"},
    {id: '5', name: "Gorra Rock", category: "Gorras" , price: 150, stock: 15, img: "https://i.ibb.co/QkKfLHQ/gorra1.jpg", det :"Gorra en drill, bordado vintage rockgotá, correa ajustable en la parte trasera. Hecho en Colombia"},
] 

  
const getData = new Promise((resolve, reject)=>{
    if (true) {
        setTimeout(() => {
            resolve(productos)        
        }, 3000);
    }else{
        reject('Error')
    }
  })

export default getData
