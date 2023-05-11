import useAsync from '../useAsync';
import useToken from '../useToken';
import { getTicketTypes } from '../../services/ticktsApi';

export function useTicket() {
  const token = useToken();
  const ticketsTypes = useAsync(() => getTicketTypes(token));

  if(!ticketsTypes.loading) return ticketsTypes.data;
};
