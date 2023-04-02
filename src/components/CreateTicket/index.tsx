import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ticketsApi from '../../api/ticket'

const CreateTicket = () => {
    const [details, setDetails] = useState("")
    const navigate = useNavigate()

    const handleCreate = async ()=>{
      try{
        const response = await ticketsApi.create({details,state:"open"})
        console.log(response)
        navigate("/tickets")
      }catch(err){
        console.log(err)
      }
    }

  return (
    <div  className='w-3/5 m-auto flex flex-col space-y-4'>
        <label className='font-bold'>Details</label>
        <textarea className="border rounded" placeholder='What is this ticket about?' rows={10} value={details} onChange={(e)=>setDetails(e.target.value)}/>
        
      
        <button onClick={handleCreate} className='w-40 bg-primary font-bold py-2 rounded-xl '>Create Ticket</button>
    </div>
  )
}

export default CreateTicket