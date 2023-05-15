import styled from 'styled-components';
import { useEffect, useState } from 'react';
import HotelCard from '../../../components/cards/hotel-card';
import RoomCard from '../../../components/cards/room-card';
import { useHotel } from '../../../hooks/api/useHotel.js';
import { useContext } from 'react';
import TicketContext from '../../../contexts/TicketContext';
import ErrorScreen from '../../../components/ErrorScreen';

export default function Hotel() {
    const [hotelId, setHotelId] = useState();
    const [selectedHotel, setSelectedHotel] = useState();
    const [roomId, setRoomId] = useState();
    const [selectedRoom, setSelectedRoom] = useState();
    const { ticketType, ticket } = useContext(TicketContext);
    
    if (ticket?.status !== 'PAID') {
        return (
            <ErrorScreen message="Erro: Ingresso não pago." details="Você deve realizar o pagamento de seu ingresso." />
        );
    }

    if (ticketType?.isRemote || !ticketType?.includesHotel) {
        return (
            <ErrorScreen
                message="Erro: Modalidade não permite escolha de hotel"
                details="A modalidade de seu ingresso é remota ou não inclui hospedagem, portanto não é necessário escolher um hotel."
            />
        );
    }

    const hotels = useHotel();

    var rooms = [];
    if (hotelId && hotels) {
        for (let i = 0; i < hotels.length; i++) {
            if (hotels[i].id === hotelId) {
                rooms = hotels[i].Rooms;
            }
        }
    }

    if (hotels === null)
        return (
            <ConteinerPayment>
                <h1>Escolha de hotel e quarto</h1>
                <Spacing>
                    <p>Efetue o pagamento do seu ticket para visualizar os Hotéis</p>
                </Spacing>
            </ConteinerPayment>
        );
    return (
        <ConteinerPayment>
            <h1>Escolha de hotel e quarto</h1>
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
            {hotelId && (
                <Spacing>
                    <p>Ótima pedida! Agora escolha seu quarto:</p>
                    <UlRoom>
                        {rooms &&
                            rooms.map((item, index) => (
                                <RoomCard
                                    id={item.id}
                                    name={item.name}
                                    capacity={item.capacity}
                                    selectedRoom={selectedRoom}
                                    setSelectedRoom={setSelectedRoom}
                                />
                            ))}
                    </UlRoom>
                </Spacing>
            )}
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
    h1 {
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
