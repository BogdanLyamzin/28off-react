import { useContext } from "react";

import styles from "./CaseList.module.scss";

import { locale } from "./locale";

import { langContext } from "../../../context";

const CaseList = ({ items }) => {
    const {lang} = useContext(langContext);
   
    const listElements = items.map(({id, text, onRemove}) => (
        <li key={id} className={styles.item}>{text}
            <span className={styles.remove} onClick={onRemove}>X</span>
        </li>)
    );

    if (!items.length) {
        return <></>
    }

    return (
        <div>
            <h2>{locale[lang].title}</h2>
            <ol>
                {listElements}
            </ol>
        </div>
    )
}

export default CaseList;