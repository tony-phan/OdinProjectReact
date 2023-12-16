import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import style from './stylesheet/products.module.css'

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((json) => {
                const data = json.map((j) => {
                    return { 
                        ...j 
                    }
                });
                setProducts(data);
            })
    }, []);

    return (
        <>
        <h1>Shop</h1>
        <div className={style.products}>
            {products.map((product, index) => (
                <ProductCard product={product} key={index} />
            ))}
        </div>
        </>
    )
}

export default Shop