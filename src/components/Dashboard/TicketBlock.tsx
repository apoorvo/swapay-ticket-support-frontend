import React from 'react'
import { Link } from 'react-router-dom'
import {Ticket} from './index'

const TicketBlock = ({ticket}:{ticket:Ticket}) => {
  return (
    <div><Link to={`/tickets/${ticket.id}`}>{ticket.details}</Link></div>
  )
}

export default TicketBlock