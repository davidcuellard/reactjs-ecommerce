import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


function ItemListContainer() {
    const [ products , setProducts] = useState([])
    const [ loading, setLoading] = useState(true)
    const [ category, setCategory] = useState(true)
    const { categoryId } = useParams()
    
    useEffect( () => {
        const db = getFirestore()
        const queryDb = categoryId ? 
                                    query(collection(db, 'productos'), where("category", "==" , categoryId)) 
                                    : 
                                    collection(db, 'productos')
        getDocs(queryDb)
                        .then((res) => 
                        setProducts(res.docs.map((doc) => ( { id: doc.id, ...doc.data() } )))
                        )
                        .catch(err => console.log(err))
                        .finally(()=> setLoading(false))

        categoryId ? setCategory(false) : setCategory(true)
        
    },[categoryId])

    return (
    <div className='itemContainer'>
        { category ? <h2> Productos </h2> : <h2> { categoryId } </h2> }
        { loading ? <h2> Cargando...</h2> : <ItemList products = { products }/> }

    </div>
    )
}

export default ItemListContainer