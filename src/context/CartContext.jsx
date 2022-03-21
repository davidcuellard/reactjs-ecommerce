import { createContext, memo, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = memo(
    ({ children }) => {

        const [cartList, setCartList] = useState([])
        const [cartLength, setCartLength] = useState(true)
        const [total, setTotal] = useState(0)
        const [totalPrice, setTotalPrice] = useState(0)
        const [cartShow, setCartShow] = useState(false)


        let isInCart = cartList.map(res => res.id)

        const agregarCart = (prod) => {
            
            if(isInCart.some(elem => elem === prod.id) == false){
                setCartList( [ ...cartList, prod ] )
                setCartLength(false)
                setCartShow(true)
            }else{
                alert("Ya tiene este producto agregado en el carrito")
            }
        }

        const vaciarCart = () => {
            setCartList( [] )
            setCartLength(true)
            setCartShow(false)
        } 


        const removeItem = (idx) => {
            let position = isInCart.indexOf(idx)    
            cartList.splice(position, 1);
            setCartList( [...cartList] )
            if (cartList.length === 0){
                setCartLength(true)
                setCartShow(false)
            }
            
        }

        const totalProducts = () => {
            let totalProds = cartList.map(res => res.cantidad)
            const initialValue = 0;
            const sumWithInitial = totalProds.reduce(
                                                    (previousValue, currentValue) => 
                                                    previousValue + currentValue, initialValue)
            setTotal(sumWithInitial)
        }

        const totalPriceFx = () => {
            let totalPrices = cartList.map(res => Number(res.price))
            let totalProds = cartList.map(res => res.cantidad)

            const mulArrays = (arr1, arr2) => {
                return arr1.map((e, index) => e * arr2[index]);
            }

            let totalPricesProds = mulArrays(totalPrices,totalProds)

            const initialValue = 0;
            const sumWithInitial = totalPricesProds.reduce(
                                                            (previousValue, currentValue) => 
                                                            previousValue + currentValue, initialValue)
            setTotalPrice(sumWithInitial)

        }

        return (
            <div className="itemContainer">
            <CartContext.Provider value = {{
                cartList, agregarCart, vaciarCart, removeItem, cartLength, total, totalProducts, totalPriceFx, totalPrice, cartShow
            }}>
                {children}
            </CartContext.Provider>
            </div>
            )
    }
, (prevProps,nextProps) => prevProps.cartList.length == nextProps.cartList.length
)

export default CartContextProvider
