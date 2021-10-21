import NavbarMenu from "./NavbarMenu";

import styles from "./Navbar.module.scss";

const Navbar = ()=>{
    return (
        <nav>
            <div className="container">
                <div className={styles.row}>
                    <NavbarMenu />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
