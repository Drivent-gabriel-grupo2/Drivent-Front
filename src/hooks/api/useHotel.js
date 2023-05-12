import useAsync from '../useAsync';
import useToken from '../useToken';
import { getHotels } from '../../services/hotelApi';

export function useHotel() {
  const token = useToken();
  const hotels = useAsync(() => getHotels(token));

  if(!hotels.loading) return hotels.data;
};
