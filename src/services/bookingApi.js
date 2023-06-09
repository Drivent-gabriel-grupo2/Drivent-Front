import api from './api';

export async function getBookings(token) {
  const response = await api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function getUserBooking(token) {
  try{
    const response = await api.get('/booking', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  } catch {
    return null;
  }
}

export async function postBooking(token, body) {
  const response = await api.post('/booking', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateBooking(token, id, body) {
  const response = await api.put(`/booking/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
