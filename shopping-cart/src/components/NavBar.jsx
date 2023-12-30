import { Link } from "react-router-dom";
import style from './stylesheet/navBar.module.css'

function NavBar() {
    return ( 
        <div className={style.navBar}>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
            <Link to="cart">Cart</Link>
        </div>
    )
}

export default NavBar