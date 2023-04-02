import axios from "axios"

const BASE_API_URL  = process.env.REACT_APP_BASE_API_URL

const list = ()=>axios.get(`${BASE_API_URL}/tickets/`)
const show = (id:string)=>axios.get(`${BASE_API_URL}/tickets/${id}/`)
const create = (payload:{})=>axios.post(`${BASE_API_URL}/tickets`,payload)
const update = (id:string,payload:{})=>axios.put(`${BASE_API_URL}/tickets/${id}/`,payload)

const ticketsApi = {
    list,
    show,
    create,
    update
}

export default ticketsApi