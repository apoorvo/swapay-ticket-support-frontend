import React, { Dispatch, SetStateAction, useState } from 'react'
import ticketsApi from '../../api/ticket'
import { Ticket } from '../../interfaces/Ticket'
import { getUpdateStates } from '../../utils/constants'

const EditTicket = ({ticket, setEdit, fetchTicket}:{ticket: Ticket, setEdit: Dispatch<SetStateAction<boolean>>, fetchTicket:()=>void} ) => {
    const [details, setDetails] = useState(ticket.details)
    const [ticketState, setTicketState] = useState(ticket.state)
    
 

    const options = getUpdateStates(ticket)
    const handleUpdate =async ()=>{
        try{
            const {data:{message}}=await ticketsApi.update(ticket.id,{
                state: ticketState,
                details
            })
            console.log(message)
            await fetchTicket()
        }catch(err){
            console.log(err)
        }finally{
            setEdit(false)
        }
    }

  return (
    <div className='flex flex-col space-y-4'>
        <select value={ticketState} className={`bg-${ticketState} px-2 py-1  text-zinc-900 font-bold`} onChange={(e)=>setTicketState(e.target.value)} >
            {options.map((state)=><option key={state.order} className={`bg-${state.value}  text-zinc-900 font-bold`} value={state.value}>{state.label}</option>)}
        </select>
        <textarea className="border rounded" placeholder='What is this ticket about?' rows={5} value={details} onChange={(e)=>setDetails(e.target.value)}/>
 
        <button onClick={handleUpdate} className='w-40 bg-primary font-bold py-2 rounded-xl '>Update Ticket</button>
        
    </div>
  )
}

export default EditTicket