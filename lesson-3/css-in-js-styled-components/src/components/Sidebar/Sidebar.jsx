import MainMenu from "../MainMenu";

import "./Sidebar.css";

// import { menuItems } from "./menuItems";
import menuItems from "./menuItems.json";

const Sidebar = () => {
    return (
        <aside>
            <div className="sidebar-header-bg"></div>
            <MainMenu items={menuItems} />
        </aside>
    )
};

export default Sidebar;