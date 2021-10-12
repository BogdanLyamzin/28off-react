import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/posts"
});

const createParams = (params) => {
    return {
        params
    }
};

export const getAllPosts = ()=> {
    return instance.get("/");
}

export const getPosts = (_page = 1, _limit = 3)=> {
    return instance.get("/", createParams({_limit, _page}));
}

export const getPostById = (id)=> {
    return instance.get(`/${id}`);
}
