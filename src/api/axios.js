import axios from 'axios'


export const api = axios.create({
    baseURL: 'https://randomuser.me'
})


export const getPostsPage = async (pageParam, options = {}) => {
    
    const response = await api.get(`/api?_page=${pageParam}&results=10`, options)
    return response.data
}