import {useDispatch} from "react-redux";

import { addToCart } from "../../redux/cart/cart-actions";
import {addToFavorites} from "../../redux/favorites/favorites-actions"

import styles from "./ProductList.module.scss";

const ProductList = ({list})=> {

    const dispatch = useDispatch();

    const addCart = product => {
        const action = addToCart(product);
        dispatch(action)
    }

    const addFavorites = product => dispatch(addToFavorites(product))

    const elements = list.map(item =>
    <li key={item.id} className={styles.item}>
        <h4>{item.title}</h4>
        <p>Цена: {item.price} 
        <button onClick={()=>addCart(item)} className={styles.btnBuy}>Купить</button>
        <button onClick={()=>addFavorites(item)} className={styles.btnBuy}>+ Избранное</button>
        </p>
    </li>)

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}


export default ProductList;