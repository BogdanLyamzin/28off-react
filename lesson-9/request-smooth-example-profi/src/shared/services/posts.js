import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000"
});

const createParams = (params) => {
    return {
        params
    }
};

export const getAllPosts = async()=> {
    return instance.get("/posts");
}

export const getPosts = async(_page = 1, _limit = 3)=> {
    return instance.get("/posts", createParams({_limit, _page}));
}

// export const getPosts = async(_page = 1, _limit = 3)=> {
//     return instance.get("/posts", {
//         params: {
//             _page,
//             _limit
//         }
//     });
// }

