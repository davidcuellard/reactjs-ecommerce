import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getData from '../data/data'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [product , setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { detalleId } = useParams() 

    useEffect( () => {
        getData
        .then((res) => 
                setProduct(res.find( products => products.id === detalleId ))
        )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

    return (
    <div className='itemContainer'>
        <h2> Detalle </h2>

        { loading ? <h1> Cargando...</h1> : <ItemDetail product = { product }/> }

    </div>
    )
}

export default ItemDetailContainer