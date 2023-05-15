import api from './api';

export async function getBookings(token) {
  const response = await api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  return response.data;
};
