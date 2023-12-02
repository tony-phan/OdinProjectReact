import { useEffect, useState } from 'react'

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((json) => {
                const data = json.map((j, index) => {
                    return { 
                        key: index,
                        ...j 
                    }
                });
                setProducts(data);
            })
    }, []);

    return (
        <>
        <h1>Shop component</h1>
        </>
    )
}

export default Shop