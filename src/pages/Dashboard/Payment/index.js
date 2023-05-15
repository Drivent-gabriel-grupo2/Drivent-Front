import styled from 'styled-components';
import { useTicketTypes } from '../../../hooks/api/useTicket';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardTicket from '../../../components/cards';
import Card from '../../../components/cards/card';
import { postTicket } from '../../../services/ticktsApi';
import useToken from '../../../hooks/useToken';

export default function Payment() {
    const [selectedCardId, setSelectedCardId] = useState();
    const [selectedInPerson, setSelectedInPerson] = useState(false);
    const [selectedCardType, setSelectedCardType] = useState();
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line
    const data = useTicketTypes();
    const navigate = useNavigate();
    const token = useToken();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const ticketTypeId = selectedTicket.id;
        setLoading(true);
        try {
            await postTicket(token, ticketTypeId);
            navigate('/dashboard/datacard');
        } catch (e) {
            alert('Erro ao enviar dados');
            setLoading(false);
        }
    };

    const withoutHotel = data?.filter((item) => item.includesHotel === false);
    const inPerson = data?.filter((item) => item.isRemote === false);
    const basePrice = inPerson?.filter((item) => item.includesHotel === false)[0].price;

    return (
        <ConteinerPayment>
            <h1>Ingresso e pagamento</h1>
            <div>
                <p>Primeiro, escolha sua modalidade de ingresso</p>
                <UlPrice>
                    {data &&
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
                                ticket={item}
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
            {selectedTicket && (selectedTicket?.isRemote || selectedInPerson) && (
                <div>
                    {' '}
                    <p>Fechado! O total ficou em R$ {selectedTicket.price}. Agora é só confirmar:</p>{' '}
                    <button onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Carregando' : 'RESERVAR INGRESSO'}
                    </button>
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
        &:disabled {
            background: #8e8e8e;
        }
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
