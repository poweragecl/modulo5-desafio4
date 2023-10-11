import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/cartproducts";



export const Card = ({nombre, imagen, ingredientes, precio, id}) => {
    
    const {cartItems, setCartItems} = useContext(CartContext);

    const navigate = useNavigate();

    const toDetails = () => {
        navigate(`/pizza/${id}`);
    }

    const handleAddToCartSubmit = () => {

        const productIndex = cartItems.findIndex((item) => item.id === id);

        if (productIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[productIndex].cantidad += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { id, nombre, precio, imagen, cantidad: 1 }]);
        }

    }

    

    return(
        <>

            <li className="product">

                <img className="product-img" src={imagen} alt={nombre} />

                <div className="product-info">

                    <h3 className="product-name">{nombre}</h3>
                    <h4 className="product-ingredients-title">Ingredientes:</h4>
                    <ul className="product-ingredients">
                        {ingredientes.map((i, index) => (
                            <li key={index}>
                                {i}
                            </li>
                        ))}
                    </ul>  

                    <h5 className="product-price">Valor: {precio.toLocaleString('es-CL', {style: 'currency', currency: 'CLP' })}</h5>

                    <div className="buttons-container">
                        <button className="btn view-more" onClick={toDetails}>Ver Más</button>
                        <button className="btn add-to-cart" onClick={handleAddToCartSubmit}>Agregar al Carrito</button>
                    </div>

                </div>
            </li>

        </>
    )
}