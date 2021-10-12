import { useState } from "react";

import LangSwitcher from "./LangSwitcher/";

const Navbar = ()=> {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <nav>
            <div>
                <a href="">Logo</a>
            </div>
            <div>Menu</div>
            <LangSwitcher className="light" />
        </nav>

    )
};

export default Navbar;