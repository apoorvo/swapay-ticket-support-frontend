import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ticketsApi from '../../api/ticket'
import { Ticket } from '../Dashboard'
const ShowTicket = () => {
  const {ticketid} = useParams()
  const [ticket, setTicket] = useState<Ticket>({
    details:"",
    state:"",
    id:""
  })
  const fetchTicket = async()=>{
    try{
      const {data:{ticket}} =await ticketsApi.show(ticketid??"")
      console.log(ticket)
      setTicket(ticket)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    fetchTicket()
  },[])

  return (
    <div>
        <h1>{ticket.details}</h1>
        <h1>{ticket.state}</h1>
    </div>
  )
}

export default ShowTicket