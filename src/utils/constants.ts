import { Ticket } from "../interfaces/Ticket"

export const STATE_ENUMS = [{ value: "open", label: "Open", order:1 }, { value: "in-progress", label: "In Progress", order:2 }, { value: "code-review", label: "Code Review", order:3 }, { value: "closed", label: "Closed", order:4 }]

export const parseState = (stateValue:string)=>{
    const state = STATE_ENUMS.find((state)=>state.value===stateValue)
    return state?.label
}

export const getUpdateStates = (ticket:Ticket)=>{
    const currentOption = STATE_ENUMS.find((state)=> state.value===ticket.state)
    if(currentOption){
        const lowerLimit = (currentOption.order-1) <=0? 1: currentOption.order-1
        const upperLimit =(currentOption.order+1) > (STATE_ENUMS.length) ? STATE_ENUMS.length : currentOption.order+1

        return STATE_ENUMS.filter((state)=> state.order>= lowerLimit && state.order<=upperLimit)
    }
    return[]
}