import { useOutletContext } from "react-router-dom"

function Cart() {
    const context = useOutletContext(); 
    const cart = context.cart;

    const cartList = (Object.keys(cart)).map((item, index) => <li key={index}>{cart[item].product.title}</li>);

    const total = Object.values(cart).reduce((accumulator, currentItem) => (
        accumulator + (currentItem.quantity * currentItem.product.price)
    ), 0);

    console.log('total ', total);

    return (
        <>
        <h1>Cart</h1>
        <ul>
            {cartList}
        </ul>
        </>
    )
}

export default Cart