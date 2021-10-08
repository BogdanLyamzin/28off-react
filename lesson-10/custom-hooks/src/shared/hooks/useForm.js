import {useState} from "react";

export const useForm = (initialState)=> {
    const [data, setData] = useState(initialState);

    const handleChange = ({target}) => {
        const {name, value} = target;
        setData({
            ...data,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({...initialState})
    }

    return [data, handleChange, handleSubmit]
};

