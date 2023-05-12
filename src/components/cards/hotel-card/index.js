import { useState } from 'react';
import styled from 'styled-components';

export default function HotelCard({ id, name, setHotelId, selectedHotel, setSelectedHotel }) {
    const isSelected = selectedHotel === id;
    const [bColor, setBcolor] = useState('#ffff');
    function cardClicked(id) {
        setHotelId(id);
        setSelectedHotel(id);
        setBcolor('#FFEED2');
    };

    return (
        <ConteinerCard onClick={() => cardClicked(id)} style={{ background: isSelected ? '#FFEED2' : '#FFFF' }}>
            <p>{name ? 'Online' : 'Presencial'}</p>

        </ConteinerCard>
    );
}

const ConteinerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 196px;
    height: 264px;
    border: 1px solid #CECECE;
    border-radius: 10px;
    p{
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 20px;
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
