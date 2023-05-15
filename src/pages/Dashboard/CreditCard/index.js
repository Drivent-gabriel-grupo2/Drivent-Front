//componente a ser renderizado quando apertado o botão na tela anterior
/* eslint-disable */
import { useContext, useState } from 'react';
import ConfirmedBox from '../../../components/ConfirmedBox';
import CardBox from '../../../components/CreditCardBox';
import styled from 'styled-components';
import TicketContext from '../../../contexts/TicketProvider';

export default function CreditCard() {
    const [confirmedPayment, setConfirmedPayment] = useState(false);
    const { selectedTicket } = useContext(TicketContext);

    return (
        <Container>
            <h1>Ingresso e Pagamento</h1>
            <TicketInfo>
                <p>Ingresso Escolhido</p>
                <div>
                    <h1>
                        {selectedTicket.isRemote
                            ? 'Online'
                            : selectedTicket.includesHotel
                            ? 'Presencial + Com Hotel'
                            : 'Presencial + Sem Hotel'}
                    </h1>
                    <p>
                      R$ {selectedTicket.price}
                    </p>
                </div>
            </TicketInfo>
            {confirmedPayment && <ConfirmedBox />}
            {!confirmedPayment && <CardBox setConfirmedPayment={setConfirmedPayment} />}
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
