

import styles from "./CaseList.module.scss";

const CaseList = ({ items }) => {
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
            <h2>Список текущих дел</h2>
            <ol>
                {listElements}
            </ol>
            </div>
    )
}

export default CaseList;