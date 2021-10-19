import {useSelector} from "react-redux";

const Cart = ()=> {
    const cart = useSelector(store => store.cart);
    return (
        <div>
            <p>Корзина</p>
            <p>{cart.length} товаров</p>
        </div>
    )
};

export default Cart;
