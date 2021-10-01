import styles from "./CaseList.module.scss";

const CaseList = ({ items }) => {
    const elements = items.map(({ id, text, description, urgency, onDelete }) => (
        <li key={id}>
            <h4>{text}</h4>
            {description && <p>{description}</p>}
            {urgency && <p><strong>Срочно!</strong></p>}
            <button onClick={onDelete}>Удалить</button>
        </li>
    ))
    return (
        <ol>
            {elements}
        </ol>
    )
}

export default CaseList;