import { useSelector } from "react-redux";
import { getCart } from "../../redux/cart/cart-selectors";

const HomePage = ()=> {
    const {length} = useSelector(getCart)
    return (
        <div>
            Главная страница
        </div>
    )
};

export default HomePage;