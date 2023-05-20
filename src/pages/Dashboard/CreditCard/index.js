//componente a ser renderizado quando apertado o botão na tela anterior
/* eslint-disable */
import { useState } from 'react';
import ConfirmedBox from '../../../components/ConfirmedBox';
import CardBox from '../../../components/CreditCardBox';
import styled from 'styled-components';
import TicketContext from '../../../contexts/TicketContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useTicketTypes, useTicket } from '../../../hooks/api/useTicket';

export default function CreditCard() {
    const [confirmedPayment, setConfirmedPayment] = useState(false);
    const { setTicket, setTicketType } = useContext(TicketContext);
    const ticket = useTicket();
    const ticketTypes = useTicketTypes();
    useEffect(() => {
        if (ticket) {
            setTicket(ticket);
            const ticketType = ticketTypes?.find((item) => item.id === ticket.ticketTypeId);
            setTicketType(ticketType);
        }
        if (ticket?.status === 'PAID') {
            setConfirmedPayment(true);
        }
    }, [ticket]);

    return (
        <Container>
            <h1>Ingresso e Pagamento</h1>
            <TicketInfo>
                <p>Ingresso Escolhido</p>
                <div>
                    <h1>
                        {ticket?.TicketType.isRemote
                            ? 'Online'
                            : ticket?.TicketType.includesHotel
                            ? 'Presencial + Com Hotel'
                            : 'Presencial + Sem Hotel'}
                    </h1>
                    <p>R$ {ticket?.TicketType.price}</p>
                </div>
            </TicketInfo>
            {confirmedPayment && <ConfirmedBox />}
            {!confirmedPayment && <CardBox ticket={ticket} setConfirmedPayment={setConfirmedPayment} />}
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > h1 {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 34px;
        color: #000000;
        margin-bottom: 37px;
    }
`;
const TicketInfo = styled.div`
    font-size: 20px;
    color: #8e8e8e;
    margin-bottom: 20px;
    div {
        margin-top: 10px;
        width: 290px;
        height: 108px;
        border-radius: 20px;
        background-color: #ffeed2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        > h1 {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            line-height: 19px;
            color: #454545;
            text-align: center;
        }
        > p {
            margin-top: 10px;
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            line-height: 16px;
            color: #898989;
            text-align: center;
        }
    }
`;
