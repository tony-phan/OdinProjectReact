import { useContext, useState } from "react";
import { useOutletContext } from "react-router-dom";
import style from './stylesheet/productCard.module.css'

function ProductCard(props) {
    const [quantity, setQuantity] = useState(0);
    const context = useOutletContext();

    let changeQuantity = (e) => {
        setQuantity(+e.target.value);
    }

    let handleClick = () => {
        quantity === 0 ? alert('Quantity must be greater than 0') : context.addToCart(props.product, quantity);
        // clear the input field after adding to cart
        document.getElementById("input").innerHTML = '';
    }

    /*
    image
    title
    price
    input & button (quantity)
    */
    return (
        <div className={style.card}>
            <img src={props.product.image} className={style.image} />
            <p>{props.product.title}</p>
            <p>${props.product.price}</p>
            <input id="input" type="number" min="0" max="100" onChange={changeQuantity}/>
            <button onClick={handleClick} >Add to cart</button>
        </div>
    )
}

export default ProductCard;