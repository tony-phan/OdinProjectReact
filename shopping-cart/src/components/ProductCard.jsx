import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import style from './stylesheet/productCard.module.css'
import PropTypes from 'prop-types';
import { Alert, Snackbar } from '@mui/material';

function ProductCard(props) {
    const [quantity, setQuantity] = useState(0);
    const [addToCartFlag, setAddToCartFlag] = useState(false);
    const [quantityFlag, setQuantityFlag] = useState(false);
    const context = useOutletContext();

    let changeQuantity = (e) => {
        setQuantity(+e.target.value);
    }

    let handleClick = () => {
        if(quantity === 0) {
            setQuantityFlag(true);
        } else {
            context.addToCart(props.product, quantity); 
            setAddToCartFlag(true);
            // clear the input field after adding to cart
            setQuantity(0);   
        }
    }

    let handleClose = () => {
        setAddToCartFlag(false);
        setQuantityFlag(false);
    }

    return (
        <div className={style.card}>
            <img src={props.product.image} className={style.image} />
            <p>{props.product.title}</p>
            <p>${props.product.price.toFixed(2)}</p>
            <input id="input" type="number" min="0" max="100" value={quantity} onChange={changeQuantity}/>
            <button onClick={handleClick} >Add to cart</button>

            <Snackbar open={addToCartFlag} onClose={handleClose}>
                <Alert severity="success" sx={{ width: '600%' }}>
                    '{props.product.title}' has been added to your cart.
                </Alert>
            </Snackbar>

            <Snackbar open={quantityFlag} onClose={handleClose}>
                <Alert severity="error" sx={{ width: '600%' }}>
                    Quantity must be greater than 0.
                </Alert>
            </Snackbar>
        </div>

        
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductCard;