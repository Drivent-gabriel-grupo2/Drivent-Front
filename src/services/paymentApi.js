import api from './api';

export default async function postCreditCardData(ticketId, cardData) {
  const response = await api.post('/process', { ticketId, cardData });
  return response.data;
}
