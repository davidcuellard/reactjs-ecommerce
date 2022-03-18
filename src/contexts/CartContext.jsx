import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }){
    const [cartList, setCartList] = useState([])
    const [cartLength, setCartLength] = useState(true)

    const agregarCart = (prod) => {
                
        let isInCart = cartList.map(res => res.id);
        
        if(isInCart.indexOf(prod.id) === -1){
            setCartList( [ ...cartList, prod ] )
            setCartLength(false)
        }else{
            alert("Ya tiene este producto agregado en el carrito")
        }

        
    }

    const vaciarCart = () => {
        setCartList( [] )
        setCartLength(true)
    } 

    const removeItem = () => {
        setCartList( [] )
    }


    return (
        <div className="itemContainer">
        <CartContext.Provider value = {{
            cartList, agregarCart, vaciarCart, removeItem, cartLength
        }}>
            {children}
        </CartContext.Provider>
        </div>
    )

}

export default CartContextProvider
