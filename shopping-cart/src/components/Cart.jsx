import { useMemo } from "react";
import { useOutletContext } from "react-router-dom"

function Cart() {
    const context = useOutletContext(); 
    const cart = context.cart;

    const total = useMemo(() => {
        return Object.values(cart).reduce((accumulator, currentItem) => (
            accumulator + (currentItem.quantity * currentItem.product.price)
        ), 0)}, [cart]);


    let removeItem = (id) => {
        const newCart = { ...cart };
        delete newCart[id];
        context.setCart(newCart);
    }

    let updateCart = (productId, e) => {
        let newCart = { ...cart };
        if(+e.target.value > 0) {
            newCart[productId].quantity = +e.target.value;
        } else {
            delete newCart[productId];
        }
        context.setCart(newCart);
    }

    return (
        <>
        <h1>Cart</h1>
        <ul>
            {Object.keys(cart).map((item, index) => (
                <li key={index}>
                    {cart[item].product.title} <br />
                    Quantity: <input id="input" type="number" min="0" max="100" value={cart[item].quantity} onChange={(e) => updateCart(cart[item].product.id, e)}/> <br />
                    Subtotal: ${(cart[item].quantity * cart[item].product.price).toFixed(2)} <br />
                    <button type="button" onClick={() => removeItem(cart[item].product.id)}>Remove</button>
                </li> 
            ))}
        </ul>
        <p>
            Total Price: <strong>${total.toFixed(2)}</strong>
        </p>
        <br />
        <button type="button">Checkout</button>
        </>
    )
}

export default Cart