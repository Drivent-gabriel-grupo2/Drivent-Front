import { useState } from 'react';
import styled from 'styled-components';

export default function HotelCard({ id, name, image, setHotelId, selectedHotel, setSelectedHotel, Rooms }) {
    const isSelected = selectedHotel === id;    
    function cardClicked(id) {
        setHotelId(id);
        setSelectedHotel(id);
    };

    return (
        <ConteinerCard onClick={() => cardClicked(id)} style={{ background: isSelected ? '#FFEED2' : '#EBEBEB' }}>
            <img src={image}></img>
            <p>{name}</p>
            <span>Tipos de acomodação:</span>
            <h2>Single e Double</h2>
            <span>Vagas disponíveis:</span>
            <h2>{Rooms[2].capacity}</h2>
        </ConteinerCard>
    );
}

const ConteinerCard = styled.div`
    display: flex;
    box-sizing:border-box;
    padding:14px;
    flex-direction: column;
    width: 196px;
    height: 264px;
    border-radius: 10px;
    img{
      height: 109px;
      width: 168px;
      border-radius: 5px;
      margin-top:2px;
      margin-bottom:10px;
    }

    p{
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 20px;
      color: #343434;
      margin-bottom:10px;
      margin-left:1px;
    }
   span{
      font-family: 'Roboto';
      font-size: 12px;
      font-weight: 700;
      margin-left:1px;
      margin-bottom:4px;
      color:#3C3C3C;
    }
    h2{
      all:unset;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      margin-left:1px;
      margin-bottom:16px;
      color: #3C3C3C;
    }
`;
