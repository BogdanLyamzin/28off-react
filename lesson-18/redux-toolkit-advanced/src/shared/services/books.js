import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/books"
});

export const fetchAllBooks = async()=> {
    const {data} = await instance.get("/");
    return data;
};

export const fetchAddBook = async(newBook)=> {
    const {data} = await instance.post("/", newBook);
    return data;
}

export const fetchRemoveBook = async(id)=> {
    const {data} = await instance.delete(`/${id}`);
    return data;
}

export default {
    fetchAllBooks,
    fetchAddBook,
    fetchRemoveBook
}