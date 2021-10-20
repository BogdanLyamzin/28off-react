import styles from "./ProductList.module.scss";

const BookList = ({title, list})=> {

    const elements = list.map(item =>
    <li key={item.id} className={styles.item}>
        <h4>{item.name}</h4>
        <p>Автор: {item.author} {item.favorite && <span>&#10084;</span>}</p>
    </li>)

    if(!list.length) {
        return <></>
    }

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
