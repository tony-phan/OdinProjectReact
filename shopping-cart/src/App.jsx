import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [cart, setCart] = useState({});

  let addToCart = (product, quantity) => {
    let newCart = {...cart};
    if(quantity > 0) {
      newCart[product.id] = { 'product': product, 'quantity': quantity };
    } else {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  return (
    <>
      <h1>Online Shop</h1>
      <p>This app was made Anthony Tran-Phan as part of the React course from The Odin Project.</p>
      <NavBar />
      <Outlet context={{addToCart, cart}} />
    </>
  )
}

export default App
