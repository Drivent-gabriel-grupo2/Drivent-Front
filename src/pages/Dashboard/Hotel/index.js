import styled from 'styled-components';
import { useEffect, useState } from 'react';
import HotelCard from '../../../components/cards/hotel-card';
import { useHotel } from '../../../hooks/api/useHotel.js';

export default function Hotel() {
  const [hotelId, setHotelId] = useState();
  const [selectedHotel, setSelectedHotel] = useState();
  const hotels = useHotel();

  if (hotels === null) return (
    <ConteinerPayment>
      <h1>Escolha de hotel e quarto</h1>
      <div>
        <p>Efetue o pagamento do seu ticket para visualizar os Hotéis</p>
      </div>
    </ConteinerPayment>
  );
  return (
    <ConteinerPayment>
      <h1>Escolha de hotel e quarto</h1>
      <div>
        <p>Primeiro, escolha seu hotel</p>
        <UlPrice>
          {
            hotels && hotels.map((item) => (
              <HotelCard
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                setHotelId={setHotelId}
                selectedHotel={selectedHotel}
                setSelectedHotel={setSelectedHotel}
                Rooms={item.Rooms}
              />
            ))
          }
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
