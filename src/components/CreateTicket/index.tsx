import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ticketsApi from '../../api/ticket'
import { STATE_ENUMS } from '../../utils/constants'

const CreateTicket = () => {
    const [details, setDetails] = useState("")
    const [state, setState] = useState("")
    const navigate = useNavigate()

    const handleCreate = async ()=>{
      try{
        const response = await ticketsApi.create({details,state})
        console.log(response)
        navigate("/tickets")
      }catch(err){
        console.log(err)
      }
    }

  return (
    <div>
        <input type={"text"} className="border rounded" value={details} onChange={(e)=>setDetails(e.target.value)}/>
        <select onChange={(e)=>{setState(e.target.value)}} value={state}>
            {STATE_ENUMS.map((state, index)=><option key={index} value={state.value}>{state.label}</option>)}
        </select>
        <button onClick={handleCreate}>Create Ticket</button>
    </div>
  )
}

export default CreateTicket