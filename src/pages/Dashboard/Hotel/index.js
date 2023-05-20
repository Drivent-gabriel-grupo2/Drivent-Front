import styled from 'styled-components';
import { useEffect, useState } from 'react';
import HotelCard from '../../../components/cards/hotel-card';
import ReservedHotelCard from '../../../components/cards/reservedHotel-card';
import RoomCard from '../../../components/cards/room-card';
import { useHotel } from '../../../hooks/api/useHotel.js';
import { useContext } from 'react';
import TicketContext from '../../../contexts/TicketContext';
import ErrorScreen from '../../../components/ErrorScreen';
import { useTicket, useTicketTypes } from '../../../hooks/api/useTicket';
import useToken from '../../../hooks/useToken';
import { postBooking, updateBooking } from '../../../services/bookingApi';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../../hooks/api/useBooking';

export default function Hotel() {
    const [hotelId, setHotelId] = useState();
    const [selectedHotel, setSelectedHotel] = useState();
    const [selectedRoom, setSelectedRoom] = useState();
    const [tradeRoom, setTradeRoom] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const ticket = useTicket();
    const hotels = useHotel();
    const booking = useBooking();
    const token = useToken();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const roomId = { roomId: selectedRoom };
        setLoading(true);
        try {
            await postBooking(token, roomId);
            navigate('/dashboard/activities');
        } catch (e) {
            setLoading(false);
            setError(true);
        }
    };

    const handleTradeRoom = async(e) => {
        e.preventDefault();
        const roomId = { roomId: selectedRoom };
        setLoading(true);
        try {
            await updateBooking(token, booking.id, roomId);
            navigate('/dashboard/activities');
        } catch (e) {
            setLoading(false);
            setError(true);
        }
    };

    if (ticket?.status !== 'PAID') {
        return (
            <ErrorScreen message="Erro: Ingresso não pago." details="Você deve realizar o pagamento de seu ingresso." />
        );
    }

    if (ticket.TicketType?.isRemote || !ticket.TicketType?.includesHotel) {
        return (
            <ErrorScreen
                message="Erro: Modalidade não permite escolha de hotel"
                details="A modalidade de seu ingresso é remota ou não inclui hospedagem, portanto não é necessário escolher um hotel."
            />
        );
    }

    var rooms = [];
    if (hotelId && hotels) {
        for (let i = 0; i < hotels.length; i++) {
            if (hotels[i].id === hotelId) {
                rooms = hotels[i].Rooms;
            }
        }
    }
    var bookedHotel;
    if (hotels && booking) {
        for (let i = 0; i < hotels.length; i++) {
            if (hotels[i].id === booking.Room.hotelId) { bookedHotel = hotels[i]; }
        }
        console.log(bookedHotel);
    }

    if (booking && bookedHotel) {
        console.log(booking.Room);
        return (
            <ConteinerPayment>
                <Spacing>
                    <span>Escolha de hotel e quarto</span>
                    <Spacing>
                        <p>Você já escolheu seu quarto:</p>
                        <UlHotel>
                            <ReservedHotelCard
                                hotel={bookedHotel}
                                Room={booking.Room}
                            />
                        </UlHotel>
                        <Spacing>
                            <button onClick={() => setTradeRoom(true)}>TROCAR DE QUARTO</button>
                        </Spacing>
                        <Spacing>
                            <UlRoom>{tradeRoom &&
                                bookedHotel.Rooms.map((item, index) => (
                                    <RoomCard
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        capacity={item.capacity}
                                        booking={item.Booking.length}
                                        selectedRoom={selectedRoom}
                                        setSelectedRoom={setSelectedRoom}
                                    />
                                ))
                            }
                            </UlRoom>
                            <Spacing>
                                {selectedRoom &&
                                    (<button onClick={handleTradeRoom} disabled={loading}>
                                        {loading ? 'Carregando' : 'RESERVAR QUARTO'}
                                    </button>)
                                }
                            </Spacing>
                        </Spacing>
                    </Spacing>
                </Spacing>
            </ConteinerPayment>
        );
    }
    return (
        <ConteinerPayment>
            <Spacing>
                <span>Escolha de hotel e quarto</span>
                <Spacing>

                    <p>Primeiro, escolha seu hotel</p>
                    <UlHotel>
                        {hotels &&
                            hotels.map((item) => (
                                <HotelCard
                                    key={item.id}
                                    hotel={item}
                                    setHotelId={setHotelId}
                                    selectedHotel={selectedHotel}
                                    setSelectedHotel={setSelectedHotel}
                                />
                            ))}
                    </UlHotel>
                </Spacing>
            </Spacing>
            {hotelId && (
                <Spacing>
                    <p>Ótima pedida! Agora escolha seu quarto:</p>
                    <UlRoom>
                        {rooms &&
                            rooms.map((item, index) => (
                                <RoomCard
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    capacity={item.capacity}
                                    booking={item.Booking.length}
                                    selectedRoom={selectedRoom}
                                    setSelectedRoom={setSelectedRoom}
                                />
                            ))}
                    </UlRoom>
                </Spacing>
            )}
            <Spacing>
                {selectedRoom &&
                    (<button onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Carregando' : 'RESERVAR QUARTO'}
                    </button>)
                }
            </Spacing>
        </ConteinerPayment>
    );
}

const ConteinerPayment = styled.div`
    button {
        width: 162px;
        height: 37px;
        background: #e0e0e0;
        border: none;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
    }
    span {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 34px;
        color: #000000;
    }
    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        color: #8e8e8e;
    }
`;

const Spacing = styled.div`
    margin: 30px 0px 0px 0px;
`;

const UlHotel = styled.ul`
    display: flex;
    gap: 17px;
`;

const UlRoom = styled.ul`
    width: 815px;
    margin-top: 33px;
    box-sizing: border-box;
    flex-wrap: wrap;
    display: flex;
    gap: 17px;
`;
