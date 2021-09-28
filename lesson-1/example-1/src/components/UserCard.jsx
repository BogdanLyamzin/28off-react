import UserInfo from "./UserInfo";

const UserCard = ({ name, description, additionInfo }) => {
    return (
        <div>
            <h2>{ name }</h2>
            {description && <p>{ description }</p>}
            {additionInfo && <UserInfo {...additionInfo} />}
            <p>Copyright 2021</p>
        </div>
    )
};

export default UserCard;
