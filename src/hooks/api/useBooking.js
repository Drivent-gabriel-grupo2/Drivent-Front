import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export function useBooking() {
    const token = useToken();
    let booking;
    try {
      booking = useAsync(() => bookingApi.getUserBooking(token));
      if (!booking.loading) return booking.data;
    } catch (err) { 
      // eslint-disable-next-line no-console
      console.log(err);
     }
  };
