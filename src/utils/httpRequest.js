import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: { Accept: 'application/json' },
});

export const get = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res.data;
};

export const post = async (path, data, options = {}) => {
    const res = await request.post(path, data, options);
    return res.data;
};

export default request;