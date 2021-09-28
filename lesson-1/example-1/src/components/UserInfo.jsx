const UserInfo = ({ father, fraction }) => {
    return (
        <>
            <h3>Дополнительная информация</h3>
            <ul>
                <li>{fraction}</li>
                <li>{father}</li>
            </ul>
        </>)
};

export default UserInfo;