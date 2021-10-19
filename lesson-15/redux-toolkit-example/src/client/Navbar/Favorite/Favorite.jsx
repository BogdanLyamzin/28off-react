import {useSelector} from "react-redux";

const Favorite = ()=> {
    const {length = 0} = useSelector(({favorites})=> favorites);
    return (
        <div>Избранное: {length}</div>
    )
};

export default Favorite;