import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getData from '../data/data'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

function ItemListContainer(props) {
/*   const onAdd = (cantidad) => {
    console.log(`Se agregó ${cantidad} de productos`)
  } */
    const [products , setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()
        
    
    useEffect( () => {

        if (categoriaId) {
            getData
            .then((res) => 
                setProducts(res.filter( products => products.category === categoriaId ))
            )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }else{
            getData
            .then((res) => 
                setProducts(res)
            )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }, [categoriaId])

    //console.log(products)

    return (
    <div className='itemContainer'>
        <h2> {props.title} </h2>
        {/* <ItemCount stock = {5} initial = {1} onAdd = { onAdd }/> */}

        { loading ? <h1> Cargando...</h1> : <ItemList products = { products }/> }

    </div>
    )
}

export default ItemListContainer