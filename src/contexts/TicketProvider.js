import { useState } from 'react';
import { createContext } from 'react';

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [selectedTicket, setSelectedTicket] = useState(null);
  
  return (
    <TicketContext.Provider value={{ selectedTicket, setSelectedTicket }}>
      {children}
    </TicketContext.Provider>
  );
}
