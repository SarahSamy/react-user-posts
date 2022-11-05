import axios from 'axios';

export const getPosts = (userId, pageParam, limit) => axios.get(`https://jsonplaceholder.typicode.com/posts`,
    {
        params: {
            userId,
            _page: pageParam,
            _limit: limit
        }
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        throw err
    })