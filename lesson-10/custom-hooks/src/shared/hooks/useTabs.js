import {useState} from "react";

export const useTabs = (startIndex)=> {
    const [activeIndex, setActiveIndex] = useState(startIndex);

    return [activeIndex, setActiveIndex]
}