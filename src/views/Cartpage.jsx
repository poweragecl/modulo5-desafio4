import { useContext } from "react"
import { CartContext } from "../context/cartproducts";

export const Cartpage = () => {

    const {cartItems, setCartItems} = useContext(CartContext);

    return(
        <>

            <div className="wrapper">
                <h1>Cart Page</h1>
                <ul className="cart-item-list">
                {cartItems.map((c, index) => (
                    <li key={index} className="cart-item">
                        <img src={c.imagen} alt={c.nombre} />
                        <h4 className="cart-item-title">{c.nombre}</h4>
                        <p>{c.precio.toLocaleString('es-CL', {style: 'currency', currency: 'CLP' })}</p>
                        <p>{c.cantidad}</p>
                    </li>
                ))}

                </ul>
            </div>

        </>
    )
}



