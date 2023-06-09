import api from './api';

export async function getTicketTypes(token) {
    const response = await api.get('/tickets/types', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export async function getTickets(token) {
    try {
        const response = await api.get('/tickets', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (e) {
        return null;
    }
}

export async function postTicket(token, ticketTypeId) {
    const response = await api.post(
        '/tickets',
        { ticketTypeId },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
}
