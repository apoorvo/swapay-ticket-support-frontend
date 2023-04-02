import React, { useEffect, useState } from 'react';
import ticketsApi from '../../api/ticket';
import Loading from '../../utils/Loading';
import TicketsTable from './TicketsTable';
import {Ticket} from '../../interfaces/Ticket'


function Dashboard() {
  const [ticketsList, setTicketsList] = useState(Array<Ticket>)
  const [isLoading, setIsLoading] = useState(true)

  const fetchTickets = async () => {
    setIsLoading(true)
    try{
      const {data:{tickets}} = await ticketsApi.list()
      setTicketsList(tickets)
    }catch(err){
      console.error(err)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    fetchTickets()
  },[])

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id' as keyof Ticket,
      },
      {
        Header: 'Details',
        accessor: 'details' as keyof Ticket,
      },
      {
        Header: 'State',
        accessor: 'state' as keyof Ticket,
      },
      {
        Header: 'Updated At',
        accessor: 'updatedAt' as keyof Ticket,
      },
      {
        Header: 'Created At',
        accessor: 'createdAt' as keyof Ticket,
      },
      
    ],
    []
  )

  const data = React.useMemo(()=>ticketsList,[ticketsList.length])

  
  if(isLoading){
    return <Loading />
  }
  return (
    <div className='w-100 p-4 flex flex-col'>
        {ticketsList.length!==0 &&
             // apply the table props
            <TicketsTable columns={columns} data={data} />
        }

        {ticketsList.length===0 && <h1 className='self-center text-xl font-bold bg-primary px-4 py-2 rounded-2xl '>Wohoo! No tickets left!</h1>}
    </div>
  )
}

export default Dashboard