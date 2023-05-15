import styled from 'styled-components';
import { useTicket } from '../../../hooks/api/useTicket';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardTicket from '../../../components/cards';
import Card from '../../../components/cards/card';
import { useContext } from 'react';
import TicketContext from '../../../contexts/TicketProvider';

export default function Payment() {
    const [selectedCardId, setSelectedCardId] = useState();
    const [selectedInPerson, setSelectedInPerson] = useState(false);
    const [selectedCardType, setSelectedCardType] = useState();
    const { selectedTicket, setSelectedTicket } = useContext(TicketContext);
    // eslint-disable-next-line
    const data = useTicket();
    const navigate = useNavigate();

    const DATA = [
        {
            id: 1,
            name: 'Ingresso presencial com hotel',
            price: 500,
            includesHotel: true,
            isRemote: false,
            createdAt: '2021-09-01T00:00:00.000Z',
            updatedAt: '2021-09-01T00:00:00.000Z',
        },
        {
            id: 2,
            name: 'Ingresso remoto',
            price: 250,
            includesHotel: false,
            isRemote: true,
            createdAt: '2021-09-01T00:00:00.000Z',
            updatedAt: '2021-09-01T00:00:00.000Z',
        },
        {
            id: 3,
            name: 'Ingresso presencial sem hotel',
            price: 350,
            includesHotel: false,
            isRemote: false,
            createdAt: '2021-09-01T00:00:00.000Z',
            updatedAt: '2021-09-01T00:00:00.000Z',
        },
    ];

    const withoutHotel = DATA.filter((item) => item.includesHotel === false);
    const inPerson = DATA.filter((item) => item.isRemote === false);
    const basePrice = inPerson.filter((item) => item.includesHotel === false)[0].price;

    return (
        <ConteinerPayment>
            <h1>Ingresso e pagamento</h1>
            <div>
                <p>Primeiro, escolha sua modalidade de ingresso</p>
                <UlPrice>
                    {DATA &&
                        withoutHotel.map((item) => (
                            <CardTicket
                                key={item.id}
                                ticket={item}
                                selectedCardType={selectedCardType}
                                setSelectedCardType={setSelectedCardType}
                                setSelectedTicket={setSelectedTicket}
                            />
                        ))}
                </UlPrice>
            </div>
            {selectedTicket && !selectedTicket?.isRemote && (
                <div>
                    <p>Ótimo! Agora escolha sua modalidade de hospedagem</p>
                    <UlPrice>
                        {inPerson.map((item) => (
                            <Card
                                key={item.id}
                                ticket = {item}
                                price={item.price - basePrice}
                                selectedCardId={selectedCardId}
                                setSelectedCardId={setSelectedCardId}
                                setSelectedInPerson={setSelectedInPerson}
                                setSelectedTicket={setSelectedTicket}
                            />
                        ))}
                    </UlPrice>
                </div>
            )}
            {(selectedTicket && (selectedTicket?.isRemote || selectedInPerson)) && (
                <div>
                    {' '}
                    <p>Fechado! O total ficou em R$ {selectedTicket.price}. Agora é só confirmar:</p>{' '}
                    <button
                      onClick={() => navigate('/dashboard/datacard')}
                    >RESERVAR INGRESSO</button>
                </div>
            )}
        </ConteinerPayment>
    );
}

const ConteinerPayment = styled.div`
    div {
        margin: 30px 0px 0px 0px;
    }
    button {
        width: 162px;
        height: 37px;
        background: #e0e0e0;
        border: none;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        margin-top: 20px;
    }
    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 34px;
        color: #000000;
    }
    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 20px;
        color: #8e8e8e;
    }
`;

const UlPrice = styled.ul`
    display: flex;
    gap: 24px;
`;
