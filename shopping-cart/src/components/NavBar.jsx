import { Link } from "react-router-dom";

function NavBar() {
    return ( 
        <>
        <Link to="/">Home</Link>
        <br/>
        <Link to="shop">Shop</Link>
        <br/>
        <Link to="cart">Cart</Link>
        </>
    )
}

export default NavBar