import axios from "axios"

const BASE_API_URL  = "http://localhost:8080/api/v1"

const list = ()=>axios.get(`${BASE_API_URL}/tickets/`)
const show = (id:string)=>axios.get(`${BASE_API_URL}/tickets/${id}/`)
const create = (payload:{})=>axios.post(`${BASE_API_URL}/tickets`,payload)

const ticketsApi = {
    list,
    show,
    create
}

export default ticketsApi