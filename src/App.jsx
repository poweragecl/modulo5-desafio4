import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './views/home'
import { Cartpage } from './views/cartpage'
import { CartContext } from './context/cartproducts'
import { Singlepizza } from './views/singlepizza'
import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { PizzaContext } from './context/products'
  

function App() {

  const [cartItems, setCartItems] = useState([]);
  const cartItemsState = {cartItems, setCartItems}

  const [pizzas, setPizzas] = useState([]);
  const pizzasState = {pizzas, setPizzas}

  const getPizzas = async () => {
      try{
          const response = await fetch('../src/assets/pizzas.json');
          if(response.ok){
              const data = await response.json();
              console.log(data);

              setPizzas(
                  data
              );

          }
      } catch(err){
          console.log("Error en el fetch");
      }

  }

  useEffect(() =>{
      getPizzas();
  }, []);

  return (
    <>
        <CartContext.Provider value={cartItemsState}>
          <PizzaContext.Provider value={pizzasState}>
            <BrowserRouter>

              <Header></Header>

                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/carrito" element={<Cartpage></Cartpage>}></Route>
                    <Route path="/pizza" element={<Singlepizza></Singlepizza>}></Route>
                    <Route path="/pizza/:id" element={<Singlepizza></Singlepizza>}></Route>
                </Routes>
            </BrowserRouter>
          </PizzaContext.Provider>
        </CartContext.Provider>
    </>
  )
}

export default App
