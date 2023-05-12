import { useState } from 'react';
import styled from 'styled-components';

export default function CardTicket({ id, name, price, setTicketPrice, setTicketId, selectedCardType, setSelectedCardType }) {
  const isSelected = selectedCardType === id;
  const [bColor, setBcolor] = useState('#ffff');
  function cardClicked(id) {
    setTicketId(id);
    setTicketPrice(price);
    setSelectedCardType(id);
    setBcolor('#FFEED2');
  };

  return (
    <ConteinerCard onClick={() => cardClicked(id)} style={{ background: isSelected ? '#FFEED2' : '#FFFF' }}>
      <p>{name ? 'Online' : 'Presencial'}</p>
      <span>R$ {price}</span>
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
