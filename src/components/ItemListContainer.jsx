import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getData from '../data/data'
import ItemList from './ItemList'

function ItemListContainer(props) {
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

    return (
    <div className='itemContainer'>
        <h2> {props.title} </h2>

        { loading ? <h1> Cargando...</h1> : <ItemList products = { products }/> }

    </div>
    )
}

export default ItemListContainer