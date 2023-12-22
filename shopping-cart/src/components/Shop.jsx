import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import style from './stylesheet/products.module.css'

function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
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
            .finally(() => {
                setLoading(false);
            })
    }, []);

    if(loading) return(<p>Loading...</p>)

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