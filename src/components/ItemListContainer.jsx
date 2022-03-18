import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getData from '../data/data'
import ItemList from './ItemList'

function ItemListContainer() {
    const [products , setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState(true)
    const { categoriaId } = useParams()
        
    
    useEffect( () => {

        if (categoriaId) {
            getData
            .then((res) => 
                setProducts(res.filter( products => products.category === categoriaId ))
            )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
            setCategory(false)
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
        { category ? <h2> Productos </h2> : <h2> { categoriaId } </h2> }
        { loading ? <h2> Cargando...</h2> : <ItemList products = { products }/> }

    </div>
    )
}

export default ItemListContainer