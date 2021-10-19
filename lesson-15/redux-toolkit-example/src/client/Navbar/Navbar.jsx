import Favorite from "./Favorite";
import NavbarMenu from "./NavbarMenu";
import Cart from "./Cart"

import styles from "./Navbar.module.scss";

const Navbar = ()=>{
    return (
        <nav>
            <div className="container">
                <div className={styles.row}>
                    <Favorite />
                    <NavbarMenu />
                    <Cart />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;