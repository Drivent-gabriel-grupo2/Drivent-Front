import { useState } from 'react';
import styled from 'styled-components';

export default function Card({ id, name, price, setTicketPrice, setTicketId, ticketPrice }) {
  const [ bColor, setBcolor ] = useState('#ffff');
  function cardClicked(id) {
    setTicketId(id);
    setTicketPrice(ticketPrice + price);
    setBcolor('#FFEED2');
  };

  return (
    <ConteinerCard onClick={() => cardClicked(id)} style={{ background: bColor }}>
      <p>{name}</p>
      <span>R$ +{price}</span>
    </ConteinerCard>
  );
};

const ConteinerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 145px;
    border: 1px solid #CECECE;
    border-radius: 20px;
    p{
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      text-align: center;
      color: #454545;
    }
    span{
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      color: #898989;
    }
`;
