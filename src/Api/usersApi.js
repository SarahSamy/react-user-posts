import axios from 'axios';

export const getUsers = (pageParam, limit) => axios.get('https://jsonplaceholder.typicode.com/users',
    {
        params: {
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

export const getUserById = (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
        return res.data
    })
    .catch(err => {
        throw err
    })