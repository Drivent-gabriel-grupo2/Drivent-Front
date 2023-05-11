import { useState } from 'react';
import styled from 'styled-components';

export default function Card({
  id,
  name,
  price,
  setTicketPrice,
  setTicketId,
  ticketPrice,
  selectedCardId,
  setSelectedCardId,
  prevTicketPrice,
  setPrevTicketPrice,
}) {
  const isSelected = selectedCardId === id;
  const [bColor, setBcolor] = useState(isSelected ? '#FFEED2' : '#FFFF');

  function cardClicked(id) {
    setSelectedCardId(id);
    setBcolor('#FFEED2');

    if (prevTicketPrice) {
      setTicketPrice((prevTicketPrice) => prevTicketPrice - 350 + price);
    } else {
      setTicketPrice((prevTicketPrice) => prevTicketPrice + price);
    }
    setPrevTicketPrice(price);
    setTicketId(id);
  }

  return (
    <ConteinerCard onClick={() => cardClicked(id)} style={{ background: isSelected ? '#FFEED2' : '#FFFF' }}>
      <p>{name}</p>
      <span>R$ + {price}</span>
    </ConteinerCard>
  );
}

const ConteinerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #454545;
  }
  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #898989;
  }
`;
