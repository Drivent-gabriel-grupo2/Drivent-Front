import useToken from '../hooks/useToken';
import api from './api';

export default async function postCreditCardData(ticketId, cardData, token) {
  const response = await api.post('/payments/process', { ticketId, cardData }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
