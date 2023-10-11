import { useContext } from "react"
import { CartContext } from "../context/cartproducts";



export const Cart = () => {

    const {cartItems, setCartItems} = useContext(CartContext);
    const totalAmount = cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);

    return(
        <>

            Carrito: 
            {cartItems.length > 0 ? (
                <>
                    <span> {totalAmount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</span>
                </>
            ) : (
                <span> $0</span>
            )}


        </>
    )
}