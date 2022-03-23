import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


function ItemListContainer() {
    const [products , setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState(true)
    const { categoriaId } = useParams()
    
    useEffect( () => {
        const db = getFirestore()
        const queryDb = collection(db, 'productos')

        if (categoriaId) {
            const queryFilter = query(
                            collection(db, 'productos'), where("category", "==" , categoriaId)
                            )
            getDocs(queryFilter)
                        .then((res) => 
                        setProducts(res.docs.map((doc) => ( { id: doc.id, ...doc.data() } )))
                        )
                        .catch(err => console.log(err))
                        .finally(()=> setLoading(false))
                        setCategory(false)
        }else{
            getDocs(queryDb)
                        .then((res) => 
                        setProducts(res.docs.map((doc) => ( { id: doc.id, ...doc.data() } )))
                        )
                        .catch(err => console.log(err))
                        .finally(()=> setLoading(false))
                        setCategory(true)
        }
    },[categoriaId])

    return (
    <div className='itemContainer'>
        { category ? <h2> Productos </h2> : <h2> { categoriaId } </h2> }
        { loading ? <h2> Cargando...</h2> : <ItemList products = { products }/> }

    </div>
    )
}

export default ItemListContainer