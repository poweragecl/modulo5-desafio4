import { useContext, useState } from "react"
import { Card } from "../components/Card"
import { PizzaContext } from "../context/products"

export const Home = () => {

    const {pizzas} = useContext(PizzaContext);

    return(


        <>
            <div className="banner">
                <div className="banner-content">
                    <h1>¡Pizzeria Mamma Mía!</h1>
                    <p>Tenemos las mejores pizzas que podrás encontrar.</p>
                </div>
            </div>


            
            <section className="menu-section">
                <div className="wrapper">

                    <h2 className="section-title">Nuestros Productos</h2>

                    <ul className="products">

                        {pizzas.map((p, index) =>(
                            <Card key={index} nombre={p.name} imagen={p.img} ingredientes={p.ingredients} precio={p.price} id={p.id}></Card>
                        ))}

                    </ul>
                </div>
            </section>

        </>
    )
}