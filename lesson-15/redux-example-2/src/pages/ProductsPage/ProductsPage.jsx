import {useState, useEffect} from "react";

import ProductList from "../../client/ProductList";

import { getAll } from "../../shared/services/products";

const ProductsPage = ()=> {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async()=>{
            const {data} = await getAll();
            setProducts(data);
        }
        fetchProducts()
    }, []);

    return (
        <div>
            <ProductList list={products} />
        </div>
    )
};

export default ProductsPage;