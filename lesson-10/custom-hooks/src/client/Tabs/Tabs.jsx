import {useTabs} from "../../shared/hooks"

import  "./Tabs.scss";

const Tabs = ({items})=> {
    const [idx, setIdx] = useTabs(0)
    const tabCaptions = items.map(({id, title}, index) =>  (
    <li onClick={()=>setIdx(index)} key={id} className={index === idx? "active": ""}>{title}</li>));

   return (
    <div class="tabs">

        <ul class="tabs__caption">
            {tabCaptions}
        </ul>
        <div class="tabs__content">
            {items[idx].content}
        </div>
       
  </div>
   ) 
}

export default Tabs;