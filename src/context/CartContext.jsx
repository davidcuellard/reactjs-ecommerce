import { createContext, memo, useContext, useEffect, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = memo(
    ({ children }) => {

        const [cartList, setCartList] = useState([])
        const [cartLength, setCartLength] = useState(true)
        const [total, setTotal] = useState(0)
        const [totalPrice, setTotalPrice] = useState(0)
        const [cartShow, setCartShow] = useState(false)

        let cartMapId = cartList.map(res => res.id)

        useEffect(()=>{
            totalProducts()
            totalPriceFx() 
        },)

        const addCart = (prod) => {

            setCartLength(false)
            setCartShow(true)

            const isInCart = () => {
                return cartMapId.some(elem => elem === prod.id)
            }
            
            if( isInCart() === false ){
                setCartList( [ ...cartList, prod ] )    
            }else{
                let position = cartMapId.indexOf(prod.id)
                cartList[position].amount = cartList[position].amount + prod.amount
            }

            totalProducts()
            totalPriceFx() 

        }

        const emptyCart = () => {
            setCartList( [] )
            setCartLength(true)
            setCartShow(false)

            totalProducts()
            totalPriceFx() 

        } 


        const removeItem = (idx) => {
            let position = cartMapId.indexOf(idx)    
            cartList.splice(position, 1);
            setCartList( [...cartList] )
            if (cartList.length === 0){
                setCartLength(true)
                setCartShow(false)
            }

            totalProducts()
            totalPriceFx() 
            
        }

        const totalProducts = () => {
            let totalProds = cartList.map(res => res.amount)
            const initialValue = 0;
            const sumWithInitial = totalProds.reduce(
                                                    (previousValue, currentValue) => 
                                                    previousValue + currentValue, initialValue)
            setTotal(sumWithInitial)
        }

        const totalPriceFx = () => {
            let totalPrices = cartList.map(res => res.price)
            let totalProds = cartList.map(res => res.amount)

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
                cartList, addCart, emptyCart, removeItem, cartLength, totalProducts, total, totalPriceFx, totalPrice, cartShow
            }}>
                {children}
            </CartContext.Provider>
            </div>
            )
    }
, (prevProps,nextProps) => prevProps.cartList === nextProps.cartList )

export default CartContextProvider
