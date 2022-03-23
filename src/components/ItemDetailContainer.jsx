import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {

    const [product , setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { detalleId } = useParams() 

    useEffect( () => {
        const db = getFirestore()
        const queryDbProduct = doc(db, 'productos', detalleId)

        getDoc(queryDbProduct).then((res) => {
                            setProduct({ id: res.id , ...res.data() })  
                    })
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