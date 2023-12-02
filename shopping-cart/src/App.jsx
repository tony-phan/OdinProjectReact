import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <h1>Online Shop</h1>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
