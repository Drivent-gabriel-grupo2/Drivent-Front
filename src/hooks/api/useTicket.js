import useAsync from '../useAsync';
import useToken from '../useToken';
import { getTicketTypes, getTickets } from '../../services/ticktsApi';

export function useTicketTypes() {
  const token = useToken();
  const ticketsTypes = useAsync(() => getTicketTypes(token));

  if(!ticketsTypes.loading) return ticketsTypes.data;
};

export function useTickets(){
  const token = useToken();
  const tickets = useAsync(() => getTickets(token));

  if(!tickets.loading) return tickets.data;
}