import api from './api';

export async function getHotels(token) {
  try{
    const response = await api.get('/hotels', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return response.data;
  } catch{
    return null;
  }
};
