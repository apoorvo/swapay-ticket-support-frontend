import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ticketsApi from '../../api/ticket';
import TicketBlock from './TicketBlock';


export interface Ticket{
    details: string,
    state: string,
    id: string
  }
  

function Dashboard() {
  const [ticketsList, setTicketsList] = useState(Array<Ticket>)
  const fetchTickets = async () => {
    try{
      const {data:{tickets}} = await ticketsApi.list()
      setTicketsList(tickets)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    fetchTickets()
  },[])
  return (
    <div>
        {ticketsList.map((ticket)=><TicketBlock key={ticket.id} ticket={ticket}/>)}
    </div>
  )
}

export default Dashboard