import {connect} from "react-redux";

import { addToCart } from "../../redux/actions";

import styles from "./ProductList.module.scss";

const ProductList = ({list, add})=> {

    const elements = list.map(item =>
    <li key={item.id} className={styles.item}>
        <h4>{item.title}</h4>
        <p>Цена: {item.price} 
        <button onClick={()=>add(item)} className={styles.btnBuy}>Купить</button></p>
    </li>)

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    const add = product => {
        const action = addToCart(product);
        dispatch(action)
    }

    return {
        add
    }
}

export default connect(null, mapDispatchToProps)(ProductList);