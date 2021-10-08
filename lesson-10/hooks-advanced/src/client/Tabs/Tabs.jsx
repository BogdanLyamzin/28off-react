import {useState} from "react";

import  "./Tabs.scss";

const Tabs = ({items})=> {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabCaptions = items.map(({id, title}, index) =>  (
    <li onClick={()=>setActiveIndex(index)} key={id} className={index === activeIndex? "active": ""}>{title}</li>));

   return (
    <div class="tabs">

        <ul class="tabs__caption">
            {tabCaptions}
        </ul>
        <div class="tabs__content">
            {items[activeIndex].content}
        </div>
       
  </div>
   ) 
}

export default Tabs;