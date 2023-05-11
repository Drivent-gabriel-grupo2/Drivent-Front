import styled from 'styled-components';
import { useTicket } from '../../../hooks/api/useTicket';
import { useState } from 'react';
import CardTicket from '../../../components/cards';
import Card from '../../../components/cards/card';

export default function Payment() {
  const [ticketId, setTicketId] = useState();
  const [ticketPrice, setTicketPrice] = useState();
  
  const data = useTicket();

  return (
    <ConteinerPayment>
      <h1>Ingresso e pagamento</h1> 
      <div>
        <p>Primeiro, escolha sua modalidade de ingresso</p>
        <UlPrice>
          {data && data.map((item) => (
            <CardTicket
              key={item.id}
              id={item.id}
              name={item.isRemot}
              price={item.price}
              setTicketId={setTicketId}
              setTicketPrice={setTicketPrice}
            />
          ))}
        </UlPrice>
      </div>
      {ticketId && (
        <div>
          <p>Ótimo! Agora escolha sua modalidade de hospedagem</p>
          <UlPrice>
            <Card 
              key={1}
              id={1}
              name={'Sem Hotel'}
              price={0}
              setTicketId={setTicketId}
              setTicketPrice={setTicketPrice}
              ticketPrice = {ticketPrice} 
            />
            <Card 
              key={1}
              id={1}
              name={'Comm Hotel'}
              price={350}
              setTicketId={setTicketId}
              setTicketPrice={setTicketPrice}
              ticketPrice = {ticketPrice} 
            />
          </UlPrice>
        </div>
      )}
      {ticketId && data.find((item) => item.id === ticketId)?.includedHotel !== false && (<div> <p>Fechado! O total ficou em R$ {ticketPrice}. Agora é só confirmar:</p> <button>RESERVAR INGRESSO</button></div>
      )}
     
    </ConteinerPayment>
  );
}

const ConteinerPayment = styled.div`
  div{
    margin: 30px 0px 0px 0px;
  }
  button{
    width: 162px;
    height: 37px;
    background: #E0E0E0;
    border: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  h1{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 34px;
    color: #000000;
  }
  p{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    color: #8E8E8E;
  }
`;

const UlPrice = styled.ul`
  display: flex;
  gap: 24px
`;

