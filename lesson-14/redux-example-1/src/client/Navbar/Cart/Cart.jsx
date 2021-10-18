import {connect} from "react-redux";

const Cart = ({cart})=> {
    return (
        <div>
            <p>Корзина</p>
            <p>{cart.length} товаров</p>
        </div>
    )
};

const mapStateToProps = (store)=> {
    return {
        cart: store.cart
    }
}

export default connect(mapStateToProps, null)(Cart);
/*
    const mapStateToProps = (store)=> {
        return {
            cart: store.cart
        }
    }
    export default ConnectCart = ()=> {
        const [store, setStore] = useStore({
            cart: []
        });
        const cartProps = mapStateToProps(store);
        return <Cart {...cartProps} />

    }
*/