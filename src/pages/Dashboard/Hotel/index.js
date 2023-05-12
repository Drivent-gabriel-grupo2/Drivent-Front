import styled from 'styled-components';
import { useTicket } from '../../../hooks/api/useTicket';
import { useState } from 'react';
import CardTicket from '../../../components/cards';
import Card from '../../../components/cards/card';
import HotelCard from '../../../components/cards/hotel-card';

export default function Payment() {
  const [hotelId, setHotelId] = useState();
  const [selectedHotel, setSelectedHotel] = useState();
  const data = useTicket();

  return (
    <ConteinerPayment>
      <h1>Escolha de hotel e quarto</h1>
      <div>
        <p>Primeiro, escolha seu hotel</p>
        <UlPrice>
          {data && data.map((item) => (
            <HotelCard
              key={item.id}
              id={item.id}
              name={item.isRemot}
              setHotelId={setHotelId}
              selectedHotel={selectedHotel}
              setSelectedHotel={setSelectedHotel}
            />
          ))}
        </UlPrice>
      </div>
      {hotelId && (
        <div>
          <p>Ótimo! Agora escolha sua modalidade de hospedagem</p>
          <UlPrice>

          </UlPrice>
        </div>
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
