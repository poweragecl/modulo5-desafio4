import { NavLink } from "react-router-dom"
import { Cart } from "./Cart";

export const Header = () => {

    const setActiveClass = ({isActive}) => (isActive ? "active" : undefined);

    return(
        <>
            <header className="main-header">
                <h1 className="brand-name">
                    <NavLink className={setActiveClass} to="/">Pizzeria Mamma Mia!</NavLink>
                    </h1>

                <div className="cart-container">
                    <NavLink className={setActiveClass} to="/carrito">
                        <Cart></Cart>
                    </NavLink>
                </div>

                

            </header>

           
            

        </>
    )
}