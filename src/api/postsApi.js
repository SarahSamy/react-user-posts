import axios from 'axios';

export const getPosts = (userId, pageParam, limit) => axios.get(`https://jsonplaceholder.typicode.com/posts`,
    {
        params: {
            userId,
            _page: pageParam,
            _limit: limit
        },
        timeout: 5000
    })
    .then(res => res.data)