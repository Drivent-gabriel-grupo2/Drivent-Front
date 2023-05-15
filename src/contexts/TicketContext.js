import { useState } from 'react';
import { createContext } from 'react';

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
    const [ticket, setTicket] = useState(undefined);
    const [ticketType, setTicketType] = useState(undefined);

    return <TicketContext.Provider value={{ ticket, setTicket, ticketType, setTicketType }}>{children}</TicketContext.Provider>;
}
