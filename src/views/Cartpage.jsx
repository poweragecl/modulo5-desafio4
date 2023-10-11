import { useContext } from "react"
import { CartContext } from "../context/cartproducts";

export const Cartpage = () => {

    const {cartItems, setCartItems} = useContext(CartContext);

    return(
        <>

            <div className="wrapper">
                <h1 className="cart-page-title">Cart Page</h1>
                <ul className="cart-item-list">
                {cartItems.map((c, index) => (
                    <li key={index} className="cart-item">

                        <div className="column">
                            <img src={c.imagen} alt={c.nombre} />
                        </div>

                        <div className="column">
                            <h4 className="cart-item-title">{c.nombre}</h4>
                        </div>

                        <div className="column">
                            <p>{c.precio.toLocaleString('es-CL', {style: 'currency', currency: 'CLP' })}</p>
                        </div>

                        <div className="column">
                            <p>{c.cantidad}</p>
                        </div>
                        
                        
                        
                        
                    </li>
                ))}

                </ul>
            </div>

        </>
    )
}



