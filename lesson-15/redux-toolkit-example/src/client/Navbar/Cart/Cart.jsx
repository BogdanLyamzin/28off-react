import {useSelector} from "react-redux";

import { getCartTotal } from "../../../redux/cart/cart-selectors";

const Cart = ()=> {
    const total = useSelector(getCartTotal);

    return (
        <div>
            <p>Корзина</p>
            <p>{total} товаров</p>
        </div>
    )
};

export default Cart;
