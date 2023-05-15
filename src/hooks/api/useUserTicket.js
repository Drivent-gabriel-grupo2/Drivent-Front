import useAsync from '../useAsync';
import useToken from '../useToken';
import { getUserTicket } from '../../services/ticktsApi';

export default function useUserTicket() {
    const token = useToken();
    const userTicket = useAsync(() => getUserTicket(token));
  
    if(!userTicket.loading) return userTicket.data;
};
