import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShowTicket from './ShowTicket'
import { Ticket } from '../../interfaces/Ticket'
import ticketsApi from '../../api/ticket'
import Loading from '../../utils/Loading'
import EditTicket from './EditTicket'


const TicketView = () => {
    const [isLoading, setIsLoading] = useState(true)
    const { ticketid } = useParams()
    const [edit, setEdit] = useState(false)

    const [ticket, setTicket] = useState<Ticket>({
        details: "",
        state: "",
        id: "",
        createdAt: new Date(),
        updatedAt: new Date()
    })
    const fetchTicket = async () => {
        setIsLoading(true)
        try {
            const { data: { ticket } } = await ticketsApi.show(ticketid ?? "")
            console.log(ticket)
            setTicket(ticket)
        } catch (err) {
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchTicket()
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='w-4/5 m-auto'>
            <h1 className='text-3xl font-bold'>Ticket #{ticket.id} {edit ? <i className="ri-close-fill cursor-pointer" onClick={()=>setEdit(false)}></i> : <i className="ri-edit-fill cursor-pointer" onClick={()=>setEdit(true)}></i>}</h1>
            {!edit && <ShowTicket ticket={ticket} />}
            {edit && <EditTicket ticket={ticket} setEdit={setEdit} fetchTicket={fetchTicket} />}
        </div>
    )
}

export default TicketView