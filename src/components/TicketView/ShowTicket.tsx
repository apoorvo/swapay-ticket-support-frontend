import { Ticket } from '../../interfaces/Ticket'
import { parseState } from '../../utils/constants'

const ShowTicket = ({ticket }:{ticket:Ticket}) => {
 

  return (
    <>
    <h3 className={`px-2 py-1 rounded w-fit text-center bg-${ticket.state} font-bold`} >{parseState(ticket.state)}</h3>
        <p>{ticket.details}</p>
        </>
  )
}

export default ShowTicket