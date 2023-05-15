import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export function useHotel() {
  const token = useToken();
  let hotels;
  try {
    hotels = useAsync(() => hotelApi.getHotels(token));
    if (!hotels.loading) return hotels.data;
  } catch (err) { console.log(err); }
};
