import axios from 'axios';

export const getUsers = (pageParam, limit) => axios.get('https://jsonplaceholder.typicode.com/users',
    {
        params: {
            _page: pageParam,
            _limit: limit
        },
        timeout: 5000
    })
    .then(res => res.data);

export const getUserById = (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`,
    {
        timeout: 5000
    })
    .then(res => res.data)