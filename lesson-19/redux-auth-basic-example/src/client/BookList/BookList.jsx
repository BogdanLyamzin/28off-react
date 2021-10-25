import styles from "./ProductList.module.scss";

const BookList = ({title, list, onDelete})=> {

    const elements = list.map(item =>
    <li key={item.id} className={styles.item}>
        <span onClick={()=> onDelete(item.id)} className={styles.remove}>X</span>
        <h4>{item.title}</h4>
        <p>Автор: {item.author} {item.favorite && <span>&#10084;</span>}</p>
    </li>)

    return (
        <>
            <h3>{title}</h3>
            <ul className={styles.list}>
                {elements}
            </ul>
        </>
    )
}


export default BookList;
