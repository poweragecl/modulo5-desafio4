import { useNavigate, useParams } from "react-router-dom"
import { PizzaContext } from "../context/products";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartproducts";

export const Singlepizza = () => {

    const navigate = useNavigate();
    const {cartItems, setCartItems} = useContext(CartContext);

    const {pizzas} = useContext(PizzaContext);
    const {id: urlId} = useParams();
    const [id, setId] = useState(urlId);
    
    useEffect(() => {
        if (!id) {
          navigate("/"); 
        }
      }, [id, navigate]);


    const pizza = pizzas.find((p) => p.id === String(id));

    const handleAddToCartSubmit = () => {

        const productIndex = cartItems.findIndex((item) => item.id === id);

        if (productIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[productIndex].cantidad += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems,  { id, nombre: pizza.name, precio: pizza.price, imagen: pizza.img, cantidad: 1 }]);
        }

    }

    if (!pizza) {

        return <div>Pizza no encontrada.</div>;
      }
    
      return (
        <>
        
        <div className="wrapper">
            <div className="single-pizza-container">
                <div className="single-pizza-picture">
                    <img src={pizza.img} alt={pizza.name} />
                </div>
                <div className="single-pizza-info">
                    <h1 className="single-pizza-title">{pizza.name}</h1>
        
                    
                    <div className="single-pizza-description">
                    {pizza.desc}
                    </div>
                    <h4 className="single-pizza-ingredients-title">Ingredientes:</h4>
                    <ul className="single-pizza-ingredients">
                        {pizza.ingredients.map((p , index) => (
                            <li key={index} className="single-pizza-ingredient"> {p}</li>
                        ))}
                    </ul>

                     <h3 className="single-pizza-price">Precio: {pizza.price.toLocaleString('es-CL', {style: 'currency', currency: 'CLP' })}</h3>           


                     <button className="btn add-to-cart" onClick={handleAddToCartSubmit}>Agregar al carrito</button>

                </div>

            </div>
        </div>
     </>
    );



}